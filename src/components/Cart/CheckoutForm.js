import classes from './CheckoutForm.module.css';
import useInput from '../../hooks/use-input';

const CheckoutForm = props => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    isInvalid: nameIsInvalid,
    valueChangeHandler: nameChangeHandler,
    valueChangeBlueHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    isInvalid: emailIsInvalid,
    valueChangeHandler: emailChangeHandler,
    valueChangeBlueHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(value => value.includes('@'));

  const {
    value: enteredPhone,
    isValid: phoneIsValid,
    isInvalid: phoneIsInvalid,
    valueChangeHandler: phoneChangeHandler,
    valueChangeBlueHandler: phoneBlurHandler,
    reset: phoneReset,
  } = useInput(value => value.trim().length === 11);

  const {
    value: enteredStreet,
    isValid: streetIsValid,
    isInvalid: streetIsInvalid,
    valueChangeHandler: streetChangeHandler,
    valueChangeBlueHandler: streetBlurHandler,
    reset: streetReset,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredCity,
    isValid: cityIsValid,
    isInvalid: cityIsInvalid,
    valueChangeHandler: cityChangeHandler,
    valueChangeBlueHandler: cityBlurHandler,
    reset: cityReset,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredPaymentMethod,
    isValid: paymentMethodIsValid,
    isInvalid: paymentMethodIsInvalid,
    valueChangeHandler: paymentMethodChangeHandler,
    valueChangeBlueHandler: paymentMethodBlurHandler,
    reset: paymentMethodReset,
  } = useInput(value => value.trim() !== '');

  let formIsValid = false;

  if (
    nameIsValid &&
    emailIsValid &&
    phoneIsValid &&
    streetIsValid &&
    cityIsValid && paymentMethodIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = submitData => {
    submitData.preventDefault();

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      email: enteredEmail,
      phone: enteredPhone,
      street: enteredStreet,
      city: enteredCity,
      paymentMethod: enteredPaymentMethod
    });

    nameReset();
    emailReset();
    phoneReset();
    streetReset();
    cityReset();
    paymentMethodReset();
  };
  
  const nameInputclasses = nameIsInvalid
  ? `${classes.invalid} ${classes.control}`
  : classes.control;
  
  const emailInputclasses = emailIsInvalid
  ? `${classes.invalid} ${classes.control}`
  : classes.control;
  
  const phoneInputclasses = phoneIsInvalid
  ? `${classes.invalid} ${classes.control}`
    : classes.control;
  const streetInputclasses = streetIsInvalid
    ? `${classes.invalid} ${classes.control}`
    : classes.control;

  const cityInputclasses = cityIsInvalid
    ? `${classes.invalid} ${classes.control}`
    : classes.control;

  const paymentMethodInputclasses = paymentMethodIsInvalid
    ? `${classes.invalid} ${classes.control}`
    : classes.control;

  return (
    <form  onSubmit={submitHandler}>
      <div className={classes.scroll}>
      <div className={nameInputclasses}>
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler}
          value={enteredName}
          type="text"
        />
        {nameIsInvalid && <p>Please enter a valid Name!</p>}
      </div>
      <div className={emailInputclasses}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
          value={enteredEmail}
        />
        {emailIsInvalid && <p>Please enter a valid email!</p>}
      </div>
      <div className={phoneInputclasses}>
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="text"
          onBlur={phoneBlurHandler}
          onChange={phoneChangeHandler}
          value={enteredPhone}
        />
        {phoneIsInvalid && <p>Please enter a valid Phone Number!</p>}
      </div>
      <div className={streetInputclasses}>
        <label htmlFor="street">Street</label>
        <input
          id="street"
          type="text"
          onBlur={streetBlurHandler}
          onChange={streetChangeHandler}
          value={enteredStreet}
        />
        {streetIsInvalid && <p>Please enter a valid street!</p>}
      </div>
      <div className={cityInputclasses}>
        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          onBlur={cityBlurHandler}
          onChange={cityChangeHandler}
          value={enteredCity}
        />
        {cityIsInvalid && <p>Please enter a valid city!</p>}
      </div>
      <div className={paymentMethodInputclasses}>
        <label htmlFor="paymentMethod">Payment Method</label>
        <select value={enteredPaymentMethod} onBlur={paymentMethodBlurHandler} onChange={paymentMethodChangeHandler}>
          <option value={''}>Click Here</option>
          <option value={'Cash on delivery'}>Cash on delivery</option>
          <option value={'Bkash'}>Bkash</option>
          <option value={'Credit Card'}>Credit Card</option>
        </select>
        {paymentMethodIsInvalid && <p>Please enter a payment method</p>}
      </div>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
