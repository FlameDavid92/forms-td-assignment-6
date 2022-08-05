import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

interface RegistrationData {
  email: string;
  subscription: string;
  password: string;
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  submitted = false;
  registrationData: RegistrationData = {
    email: "",
    subscription: "",
    password: "",
  };

  onSubmit(form: NgForm) {
    !this.submitted && (this.submitted = true);
    console.log(form.value);
    console.log(form);

    this.registrationData = { ...form.value };
    // form.reset();
  }

  onClearData() {
    this.registrationData = {
      email: "",
      subscription: "",
      password: "",
    };
    this.submitted = false;
  }
}
