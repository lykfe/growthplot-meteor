Homepage = React.createClass({
  render() {
    return (
        <div className="container nav-margin-top" style={{marginTop: 74 + 'px'}}>
          <header>
            <img className="img-responsive header_img" src="/img/assets/Home_MainImage_Large(New).png" />
            <div id="login_form" >
              <div className="padding_md">
                <form id="child_input_form" method="post" action="/login">
                  <h2 style={{fontSize: 160 + '%', fontWeight: 700}}> Login to Start Plotting!</h2>
                  <br>
                  <table className="child_inputdata_table no-spacing span_12" style={{marginBottom: 9 + 'px'}}>
                    <tr>
                      <td>
                        <input id="login_email" name="email" type="email"/>
                        <label htmlFor="login_email">Email</label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input id="login_password" name="password" type="password"/>
                        <label htmlFor="login_password">Password</label>
                      </td>
                    </tr>
                  </table>
                  <div className="span_12">
                    <button type="submit" className="float_right orange" style={{height: 51+'px', fontWeight: 500}}>
                      Submit
                    </button>
                  </div>
                  <input type="checkbox" id="stay_logged" name="stay_logged" value="stay_logged">Keep me logged in. </input></br>
                  <a href="#" style={{fontSize: 140+'%', lineHeight: 185 + '%'}}>Forgot Password?</a>
                </form>
                <form action="/register">
                  <button className="register_button yellow" style={{marginTop: 9 + 'px', height: 51 + 'px'}}>
                    Register
                  </button>
                </form>
                <div>
                  <br />
                    <div className="alert alert-danger" role="alert">message</div>
                </div>
              </div>
            </div>
          </header>
        </div>

    );
  }
});