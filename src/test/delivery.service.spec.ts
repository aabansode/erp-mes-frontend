import {TestBed} from '@angular/core/testing';

import {DeliveryService} from '../app/services/delivery.service';
import {ItemService} from '../app/services/item.service';
import {ReportService} from '../app/services/report.service';
import {TaskService} from '../app/services/task.service';
import {TeamService} from '../app/services/team.service';
import {HolidayService} from '../app/services/holiday.service';
import {EmployeeService} from '../app/services/employee.service';
import {DeliveriesComponent} from '../app/shop/deliveries/deliveries/deliveries.component';
import {DeliveryComponent} from '../app/shop/deliveries/delivery/delivery.component';
import {ItemComponent} from '../app/shop/items/item/item.component';
import {ItemsComponent} from '../app/shop/items/items/items.component';
import {ReportsComponent} from '../app/production/finance/reports/reports.component';
import {ReportComponent} from '../app/production/finance/report/report.component';
import {AddHolidayComponent} from '../app/staff/holidays/add-holiday/add-holiday.component';
import {AddEmployeeComponent} from '../app/staff/employees/add-employee/add-employee.component';
import {appRoutes} from '../app/app.routing';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';
import {AddTaskComponent} from '../app/production/tasks/add-task/add-task.component';
import {AddDeliveryComponent} from '../app/shop/deliveries/add-delivery/add-delivery.component';
import {AddItemComponent} from '../app/shop/items/add-item/add-item.component';
import {EmployeeComponent} from '../app/staff/employees/employee/employee.component';
import {EmployeesComponent} from '../app/staff/employees/employees/employees.component';
import {TeamComponent} from '../app/staff/teams/team/team.component';
import {TeamsComponent} from '../app/staff/teams/teams/teams.component';
import {TasksComponent} from '../app/production/tasks/tasks/tasks.component';
import {TaskComponent} from '../app/production/tasks/task/task.component';
import {CurrentReportComponent} from '../app/production/finance/current-report/current-report.component';
import {LoginComponent} from '../app/security/login/login.component';
import {ValidateComponent} from '../app/security/validate/validate.component';
import {SpecialPlansComponent} from '../app/production/planning/special-plans/special-plans.component';
import {PlanningComponent} from '../app/production/planning/planning/planning.component';
import {UpdateDailyPlanComponent} from '../app/production/planning/update-daily-plan/update-daily-plan.component';
import {PlanningService} from '../app/services/planning.service';
import {NotificationService} from '../app/services/notification.service';
import {SuggestionService} from '../app/services/suggestion.service';
import {OrderService} from '../app/services/order.service';
import {AddOrderComponent} from '../app/shop/orders/add-order/add-order.component';
import {AddNotificationComponent} from '../app/communication/notifications/add-notification/add-notification.component';
import {AddSuggestionComponent} from '../app/communication/suggestions/add-suggestion/add-suggestion.component';
import {OrderComponent} from '../app/shop/orders/order/order.component';
import {OrdersComponent} from '../app/shop/orders/orders/orders.component';
import {NotificationComponent} from '../app/communication/notifications/notification/notification.component';
import {NotificationsComponent} from '../app/communication/notifications/notifications/notifications.component';
import {SuggestionComponent} from '../app/communication/suggestions/suggestion/suggestion.component';
import {SuggestionsComponent} from '../app/communication/suggestions/suggestions/suggestions.component';
import {ReturnService} from '../app/services/return.service';
import {ComplaintService} from '../app/services/complaint.service';
import {ReturnComponent} from '../app/shop/returns/return/return.component';
import {ReturnsComponent} from '../app/shop/returns/returns/returns.component';
import {ComplaintComponent} from '../app/shop/complaints/complaint/complaint.component';
import {ComplaintsComponent} from '../app/shop/complaints/complaints/complaints.component';
import {InboxComponent} from '../app/communication/emails/inbox/inbox.component';
import {OutboxComponent} from '../app/communication/emails/outbox/outbox.component';
import {AddEmailComponent} from '../app/communication/emails/add-email/add-email.component';
import {ConversationComponent} from '../app/communication/emails/conversation/conversation.component';
import {EmailService} from '../app/services/email.service';
import {KanbanComponent} from '../app/production/tasks/kanban/kanban.component';

const mockDeliveries = [
  {
    id: 1,
    deliveryItems: [
      {
        id: 1,
        item: {
          id: 1,
          name: 'przedmiot1',
          quantity: 10,
          stockPrice: 10,
          originalPrice: 20,
          currentPrice: 20
        },
        quantity: 10
      },
      {
        id: 2,
        item: {
          id: 2,
          name: 'przedmiot2',
          quantity: 5,
          stockPrice: 10,
          originalPrice: 20,
          currentPrice: 20
        },
        quantity: 5
      }
    ],
    scheduledFor: new Date('2018-08-15'),
    value: 150
  },
  {
    id: 2,
    deliveryItems: [
      {
        id: 3,
        item: {
          id: 3,
          name: 'przedmiot3',
          quantity: 25,
          stockPrice: 10,
          originalPrice: 20,
          currentPrice: 20
        },
        quantity: 25
      }
    ],
    scheduledFor: new Date('2018-08-15'),
    value: 250
  }
];

const mockDeliveryRequest = {
  deliveryItemRequests: [
    {
      itemId: 3,
      quantity: 25
    }
  ],
  scheduledFor: new Date('2018-08-15'),
};

const mockDeliveryItemRequests = [
  {
    itemId: 3,
    quantity: 25
  },
  {
    itemId: 5,
    quantity: 16
  }
];

describe('DeliveryService', () => {
  let service: DeliveryService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
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
        UpdateDailyPlanComponent,
        PlanningComponent,
        SpecialPlansComponent,
        OrderComponent,
        OrdersComponent,
        NotificationComponent,
        NotificationsComponent,
        SuggestionComponent,
        SuggestionsComponent,
        ComplaintsComponent,
        ComplaintComponent,
        ReturnsComponent,
        ReturnComponent,
        InboxComponent,
        OutboxComponent,
        AddEmailComponent,
        ConversationComponent,
        KanbanComponent
      ],
      providers: [
        EmployeeService,
        HolidayService,
        TeamService,
        TaskService,
        ReportService,
        ItemService,
        DeliveryService,
        ComplaintService,
        ReturnService,
        PlanningService,
        OrderService,
        NotificationService,
        SuggestionService,
        EmailService
      ]
    });
    service = TestBed.get(DeliveryService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('given fetchAllDeliveries method', () => {
    describe('when called', () => {

      it('should hit "/deliveries" with GET and return deliveries', () => {
        service.fetchAllDeliveries().subscribe(deliveries => {
          expect(deliveries.length).toBe(2);
          expect(deliveries).toEqual(mockDeliveries);

          const req = httpMock.expectOne('http://localhost:8080/deliveries');
          expect(req.request.method).toBe('GET');
          req.flush(mockDeliveries);

          httpMock.verify();
        });
      });
    });
  });

  describe('given fetchOneDelivery method', () => {
    describe('when called', () => {

      it('should hit "/deliveries/1" with GET and return delivery', () => {
        service.fetchOneDelivery(1).subscribe(delivery => {
          expect(delivery).toEqual(mockDeliveries[0]);
        });

        const req = httpMock.expectOne('http://localhost:8080/deliveries/1');
        expect(req.request.method).toBe('GET');
        req.flush(mockDeliveries[0]);

        httpMock.verify();
      });
    });
  });

  describe('given addNewDelivery method', () => {
    describe('when called', () => {

      it('should hit "/deliveries/add" with POST', () => {
        service.addNewDelivery(mockDeliveryRequest).subscribe(() => {
        });

        const req = httpMock.expectOne('http://localhost:8080/deliveries');
        expect(req.request.method).toBe('POST');

        httpMock.verify();
      });
    });
  });

  describe('given getRecommendations method', () => {
    describe('when called', () => {

      it('should hit "/deliveries/recommended-delivery" with GET and return recommendations', () => {
        service.getRecommendations().subscribe(deliveryItemRequests => {
          expect(deliveryItemRequests).toEqual(mockDeliveryItemRequests);
        });

        const req = httpMock.expectOne('http://localhost:8080/deliveries/recommended-delivery');
        expect(req.request.method).toBe('GET');
        req.flush(mockDeliveryItemRequests);

        httpMock.verify();
      });
    });
  });

});
