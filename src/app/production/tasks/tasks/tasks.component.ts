import {Component, OnInit, ViewChild} from '@angular/core';
import {TaskService} from '../../../services/task.service';
import {Router} from '@angular/router';
import {Task} from '../../../types';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ErrorDialogComponent} from '../../../custom/error-dialog/error-dialog.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: Array<Task>;
  tasksAssigneeIsNull: Array<Task>;
  areTasksLoaded = false;
  displayedColumns: string[] = ['creationTime', 'deadline', 'category', 'name', 'type', 'assignee', 'id'];
  dataSource: MatTableDataSource<Task> = new MatTableDataSource<Task>();
  paginator: any;
  sort: any;

  constructor(private taskService: TaskService, private router: Router, private dialog: MatDialog) {
  }

  @ViewChild(MatPaginator)
  set pagination(paginator: MatPaginator) {
    this.paginator = paginator;
    this.dataSource.paginator = this.paginator;
  }

  @ViewChild(MatSort)
  set sorting(sort: MatSort) {
    this.sort = sort;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.taskService.fetchAllTasks().subscribe(res => {
      this.tasks = res;
    }, err => {
      if (err.status === 401) {
        this.router.navigate(['/login']);
      } else {
        this.showError(err);
      }
    }, () => {
      this.areTasksLoaded = true;
      this.dataSource = new MatTableDataSource<Task>(this.tasks);
      this.tasksAssigneeIsNull = this.tasks.filter((task: Task) => task.assignee == null);
    });
  }

  seeTask(id: number) {
    this.router.navigate(['/tasks', id]);
  }

  addTask() {
    this.router.navigate(['/tasks/add']);
  }

  goToAssignment() {
    this.router.navigate(['/assignment']);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  showError(err) {
    const dialogRef = this.dialog.open(ErrorDialogComponent, {
      width: '700px',
      data: {
        error: err.error,
        status: err.status
      }
    });

    dialogRef.afterClosed().subscribe(() => this.router.navigate(['/employees']));
  }
}
