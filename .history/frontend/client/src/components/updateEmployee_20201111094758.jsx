import React from 'react'



export default function updateEmployeeForm({...props}) {

    return(
        <div className={classes.container}>
      <h2 className={classes.title}>New Hire</h2>
      <form
        className={classes.root}
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <TextField
          id='outlined-password-input'
          label='First name'
          type='string'
          variant='outlined'
          name='firstName'
          value={employeeInfo.firstName}
          onChange={handleChange}
        />
        <TextField
          id='outlined-password-input'
          label='Last name'
          type='string'
          variant='outlined'
          name='lastName'
          value={employeeInfo.lastName}
          onChange={handleChange}
        />
        <TextField
          id='outlined-password-input'
          label='Employee ID #'
          type='string'
          variant='outlined'
          name='badgeID'
          value={employeeInfo.badgeID}
          onChange={handleChange}
        />
        <TextField
          id='outlined-password-input'
          label='Phone number'
          type='string'
          variant='outlined'
          name='phoneNumber'
          value={employeeInfo.phoneNumber}
          onChange={handleChange}
        />
        <TextField
          id='outlined-password-input'
          label='Email'
          type='string'
          variant='outlined'
          name='email'
          value={employeeInfo.email}
          onChange={handleChange}
        />
      {' '}
        <Button
          type='submit'
          className={classes.btn}
          variant='outlined'
          color='primary'
        >
          Add Employee
        </Button>
      </form>
    </div>
    )
}