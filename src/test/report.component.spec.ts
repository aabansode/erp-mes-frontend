import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReportComponent} from '../app/report/report.component';
import {ReportService} from '../app/report.service';
import {TaskService} from '../app/task.service';
import {TeamService} from '../app/team.service';
import {HolidayService} from '../app/holiday.service';
import {EmployeeService} from '../app/employee.service';
import {ReportsComponent} from '../app/reports/reports.component';
import {CurrentReportComponent} from '../app/current-report/current-report.component';
import {TaskComponent} from '../app/task/task.component';
import {TasksComponent} from '../app/tasks/tasks.component';
import {TeamsComponent} from '../app/teams/teams.component';
import {TeamComponent} from '../app/team/team.component';
import {EmployeesComponent} from '../app/employees/employees.component';
import {EmployeeComponent} from '../app/employee/employee.component';
import {AddTaskComponent} from '../app/add-task/add-task.component';
import {AddHolidayComponent} from '../app/add-holiday/add-holiday.component';
import {AddEmployeeComponent} from '../app/add-employee/add-employee.component';
import {appRoutes} from '../app/app.routing';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {DeliveryService} from '../app/delivery.service';
import {ItemService} from '../app/item.service';
import {DeliveriesComponent} from '../app/deliveries/deliveries.component';
import {DeliveryComponent} from '../app/delivery/delivery.component';
import {ItemComponent} from '../app/item/item.component';
import {ItemsComponent} from '../app/items/items.component';
import {AddItemComponent} from '../app/add-item/add-item.component';
import {AddDeliveryComponent} from '../app/add-delivery/add-delivery.component';
import {LoginComponent} from '../app/login/login.component';
import {ValidateComponent} from '../app/validate/validate.component';
import {NotificationService} from '../app/notification.service';
import {SuggestionService} from '../app/suggestion.service';
import {OrderService} from '../app/order.service';
import {AddOrderComponent} from '../app/add-order/add-order.component';
import {AddNotificationComponent} from '../app/add-notification/add-notification.component';
import {AddSuggestionComponent} from '../app/add-suggestion/add-suggestion.component';
import {OrderComponent} from '../app/order/order.component';
import {OrdersComponent} from '../app/orders/orders.component';
import {NotificationComponent} from '../app/notification/notification.component';
import {NotificationsComponent} from '../app/notifications/notifications.component';
import {SuggestionComponent} from '../app/suggestion/suggestion.component';
import {SuggestionsComponent} from '../app/suggestions/suggestions.component';
import {SpecialPlansComponent} from '../app/special-plans/special-plans.component';
import {PlanningComponent} from '../app/planning/planning.component';
import {UpdateDailyPlanComponent} from '../app/update-daily-plan/update-daily-plan.component';
import {PlanningService} from '../app/planning.service';

describe('ReportComponent', () => {
  let component: ReportComponent;
  let fixture: ComponentFixture<ReportComponent>;
  let service: ReportService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(appRoutes)
      ],
      declarations: [
        AddEmployeeComponent,
        AddHolidayComponent,
        AddTaskComponent,
        AddDeliveryComponent,
        AddItemComponent,
        AddOrderComponent,
        AddNotificationComponent,
        AddSuggestionComponent,
        EmployeeComponent,
        EmployeesComponent,
        TeamComponent,
        TeamsComponent,
        TasksComponent,
        TaskComponent,
        CurrentReportComponent,
        ReportComponent,
        ReportsComponent,
        ItemsComponent,
        ItemComponent,
        DeliveryComponent,
        DeliveriesComponent,
        ValidateComponent,
        LoginComponent,
        OrderComponent,
        OrdersComponent,
        NotificationComponent,
        NotificationsComponent,
        SuggestionComponent,
        SuggestionsComponent,
        UpdateDailyPlanComponent,
        PlanningComponent,
        SpecialPlansComponent
      ],
      providers: [
        EmployeeService,
        HolidayService,
        TeamService,
        TaskService,
        ReportService,
        ItemService,
        DeliveryService,
        OrderService,
        NotificationService,
        SuggestionService,
        PlanningService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportComponent);
    component = fixture.componentInstance;
    service = TestBed.get(ReportService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call reportService.fetchOneReport', () => {
    spyOn(component, 'fetchReport').and.callThrough();
    spyOn(service, 'fetchOneReport').and.callThrough();
    component.ngOnInit();
    expect(component.fetchReport).toHaveBeenCalled();
    expect(service.fetchOneReport).toHaveBeenCalled();
  });
});
