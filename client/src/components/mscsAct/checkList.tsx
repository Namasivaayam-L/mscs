import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Box, Paper } from "@mui/material";

const CheckList = () => {
	return (
		<>
			<Paper sx={{p:2,m:2}} elevation={10}>
				<Box>
					<h3>[A]</h3>
					<List>
						<ListItem>
							1.<ListItemText primary="Form 1: To be submitted in the format annexed with the MSCS Act 2002 along with the documents required under Form I. "></ListItemText>
						</ListItem>
						<ListItem>
							2.<ListItemText primary="A certificate from the bank stating credit balance there in favour of the proposed multi-state co-operative society. "></ListItemText>
						</ListItem>
						<ListItem>
							3.<ListItemText primary="A scheme explaining how the proposed multi state co-operative society has reasonable prospects of becoming a viable unit. "></ListItemText>
						</ListItem>
						<ListItem>
							4.<ListItemText primary="Four copies of bye-laws in original. "></ListItemText>
						</ListItem>
						<ListItem>
							5.<ListItemText primary="	Proposed area of operation for registration shall initially be permitted for two contagious states only. "></ListItemText>
						</ListItem>
						<ListItem>
							6.<ListItemText primary="List of at least 50 members from each state. The lsit has to be submitted in the format annexed with the MSCS Act 2002 along with the copies of ID prooofs of the members duly attested by Chief promoter. "></ListItemText>
						</ListItem>
						<ListItem>
							7.<ListItemText primary="	Certified copies of the resolutions passed by the proposed society along with the certified copy of the resolution of the promoters which shall specify the name and address of one of the applicant(s) to whom the Central Registrar may address correspondence under the rules before registration and dispatch or hand over registration documents. "></ListItemText>
						</ListItem>
						<ListItem>
							8.<ListItemText primary="	Contact number and e-mail address of the Chief Promoter or Society on cover page. "></ListItemText>
						</ListItem>
					</List>
				</Box>
			</Paper>
			<Paper sx={{p:2,m:2}} elevation={10}>
        <Box>
          <h2>[B]</h2>
          <List>
            <ListItem>
              <ListItemText primary=" For societies having objects related to thrift and credit and for multi-purpose societies following additional documents are required to be submitted along with documents mentioned at point [A] above:"></ListItemText>
            </ListItem>
            <ListItem>
              1.<ListItemText primary="	No objection Certificate from the Registrar of Cooperative Societies of the States/U.T. where the area of operation of the society is proposed to be confined. "></ListItemText>
            </ListItem>
            <ListItem>
              2.<ListItemText primary="	A certificate to the effect that the credentials of the Chief Promoter/Promoters have been verified by the Registrar of Co-operative Societies of the state where the head office is proposed to be located."></ListItemText>
            </ListItem>
          </List>
          <h4>All documents to be submitted in original with the signatures of the Chief Promoter/Promoters on each page.	</h4>
          <h4>Note: Societies which are already registered under the MSCS Act, 2002 and are desirous of expanding their area of operations falling under category (B) above shall be required to submit an NoC as mentioned at [B](1) </h4>
        </Box>
			</Paper>
		</>
	);
};

export default CheckList;
