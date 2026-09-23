import Icon from "@/components/atoms/Icon";
import Field from "@/components/molecules/Field";

export default function HomePage() {
  return (
    <div>
      <Field
        labelText="Name"
        id="name"
        placeholder="Your Name"
        filedStyle="bg-green-700"
        inputStyle=""
        labelStyle=""
        textStyle=""
        msg="Your Name"
      />
      <Field
        labelText="Email"
        id="email"
        placeholder="Your Email"
        filedStyle="bg-red-700"
        inputStyle=""
        labelStyle=""
        textStyle=""
        hasText={false}
      />
      <Field
        labelText="Mobile"
        id="mobile"
        placeholder="Your Mobile"
        filedStyle=""
        inputStyle=""
        labelStyle=""
        textStyle=""
        msg="Your Mobile"
      />
      <Field
        labelText="Username"
        id="username"
        placeholder="Your Username"
        filedStyle=""
        inputStyle=""
        labelStyle=""
        textStyle=""
        msg="Your Username"
      />
      <Field
        labelText="Password"
        id="password"
        placeholder="Your Password"
        filedStyle=""
        type="password"
        inputStyle=""
        labelStyle=""
        textStyle="Your Password"
        msg="Password between 8 and 20"
      />
      <Field
        labelText="Password Confirmation"
        id="passowrd_confirmation"
        placeholder="Repeat Password"
        filedStyle=""
        type="password"
        inputStyle=""
        labelStyle=""
        textStyle="Repeat Password"
        hasText={false}
      />
      <Icon name="search" color="red" />
      <Icon name="air" color="green" />
      <Icon name="home" />
      <Icon name="circle" />
      <Icon name="" />
    </div>
  );
}
