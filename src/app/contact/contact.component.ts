import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  form: FormGroup = this.fb.group({
    from_name: '',
    to_name: 'Admin',
    from_email: '',
    message: '',
  });

  constructor(private fb: FormBuilder) {}

  async send() {
    emailjs.init('rsiUmPMx9eew9V6y1');
    let response = await emailjs.send('service_tbbzfaj', 'template_nvh2n5h', {
      from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      from_email: this.form.value.from_email,
      message: this.form.value.message,
    });

    alert('message has been sent successfully!');
    this.form.reset();
  }
}

/* emailjs.send("service_tbbzfaj","template_nvh2n5h",{
from_name: "juan",
to_name: "test",
from_email: "juan@gmail.com",
message: "test",
}); */
