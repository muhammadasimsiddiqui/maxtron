import { Component, inject, TemplateRef } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from './notifications-service';
import { ToastsContainer } from './toasts-container.component';



@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [NgbTooltipModule,ToastsContainer],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {
	toastService = inject(ToastService);
  showStandard(template: TemplateRef<any>) {
		this.toastService.show({ template });
	}
  showSuccess(template: TemplateRef<any>) {
		this.toastService.show({ template, classname: 'bg-success text-light Toastr fun!' , delay: 10000 });
	}
  showinfo(template: TemplateRef<any>) {
		this.toastService.show({ template, classname: 'bg-info text-light ' , delay: 10000 });
	}
  showWarning(template: TemplateRef<any>) {
		this.toastService.show({ template, classname: 'bg-warning text-light ' , delay: 10000 });
	}
  showDefault(template: TemplateRef<any>) {
		this.toastService.show({ template, classname: 'bg-default text-light ' , delay: 10000 });
	}
  // border-color: #17ad37;
	// background-image: linear-gradient(310deg, #17ad37, #98ec2d) !important;
	// color: #FFF;
	showDanger(template: TemplateRef<any>) {
		this.toastService.show({ template, classname: 'bg-danger text-light', delay: 10000 });
	}

	ngOnDestroy(): void {
		this.toastService.clear();
	}
}
