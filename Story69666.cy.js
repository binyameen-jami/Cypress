
import Dashboard from "../Integration/Inspector_dash";
import LoginPage from "../Integration/LoginPage";


describe('empty spec', function () {
    it('Verify user is logged in successfully', () => {
  
      const login = new LoginPage();
      login.navigate();
      login.enterEmail('generic35_testuser');
      login.enterPassword('Oracle@1234');
      login.loginButton();
      // login.logo()
    });

    it('Verify institutes tile', () => {
        const dash = new Dashboard();
        dash.institute_tile();
      });

    it('Verify Registration office tile', () => {
        const dash = new Dashboard();
        dash.registration_tile();
      });
    
    it('Verify fine tile', () => {
        const dash = new Dashboard();
        dash.registration_tile();
      });

  });