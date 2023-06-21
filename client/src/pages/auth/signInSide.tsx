import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import mscs_logo from "../../assets/mscs_logo.webp";
import SignIn from "../../components/auth/signin";
import Register from "../../components/auth/register";

const SignInSide = (props:any) => {
	const [value, setValue] = React.useState("1");
  
	return (
		<div style={{ display: "flex", width:'' }}>
			<Box sx={{maxWidth:1000, zindex:-1}}>
				<img src={mscs_logo} width="100%" alt={"CRCS Logo"} />
			</Box>
			<Grid
				container
				direction="column"
				justifyContent="center"
				alignItems="center"
				sx={{position:'relative', left:0}}
			>
				<TabContext value={value}>
					<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
						<TabList
							onChange={(e: any, newValue: string) => setValue(newValue)}
						>
							<Tab label="Sign In" value="1" />
							<Tab label="Register" value="2" />
						</TabList>
					</Box>
					<TabPanel value="1">
						<SignIn {...props} />
					</TabPanel>
					<TabPanel value="2">
						<Register setValue={ setValue } />
					</TabPanel>
				</TabContext>
			</Grid>
		</div>
	);
};
export default SignInSide;
