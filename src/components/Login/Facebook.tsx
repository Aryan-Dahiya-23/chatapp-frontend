import { createButton } from "react-social-login-buttons";
import GoogleIcon from '@mui/icons-material/Google';

import { FaGoogle } from "react-icons/fa";


const config = {
  text: "Continue with Facebook",
  icon: "facebook",
  iconFormat: name => `fa fa-${FaGoogle}`,
  style: { background: "#3b5998", borderRadius: "15px" },
  activeStyle: { background: "#293e69" }
};

const MyFacebookLoginButton = createButton(config);

export default MyFacebookLoginButton;

