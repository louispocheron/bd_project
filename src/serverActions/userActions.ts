const addUser = (e: Event, emailRef: string) => {
    "use server"
    e.preventDefault();
    console.log(emailRef)
    // console.log(data);
}

export default addUser;