import {
  forwardRef,
  useImperativeHandle,
  useRef,
  type ComponentPropsWithoutRef,
  type FormEvent,
} from "react";

export type FormHandleRef = {
  clear: () => void;
};

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

const Form = forwardRef<FormHandleRef, FormProps>(function Form(
  { children, onSave, ...otherProps },
  ref
) {
  const form = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => {
    return {
      clear() {
        form.current?.reset();
      },
    };
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    if (!formData.get("name") || !formData.get("duration")) {
      alert("Please fill out the form");
      return;
    }

    onSave(data);
  }

  return (
    <form ref={form} onSubmit={handleSubmit} {...otherProps}>
      {children}
    </form>
  );
});

export default Form;
