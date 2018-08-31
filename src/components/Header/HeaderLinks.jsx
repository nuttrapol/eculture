/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Contacts, DirectionsRun, Home, Info } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/material-kit-react"
          color="transparent"
          className={classes.navLink}
        >
          <Home className={classes.icons} /> หน้าหลัก
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="หัวข้อการศึกษา"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Info}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              ประวัติศาสตร์/เหตุการณ์สำคัญในอดีต
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              ประเพณี
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              อาหาร
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              วัฒนธรรมทางภาษาและวรรณกรรม
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              สถานที่
            </Link>
            // <a
            //   href="https://creativetimofficial.github.io/material-kit-react/#/documentation"
            //   target="_blank"
            //   className={classes.dropdownLink}
            // >
            //   Documentation
            // </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/material-kit-react"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <DirectionsRun className={classes.icons} /> กิจกรรมในห้องเรียน
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/material-kit-react"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Contacts className={classes.icons} /> ติดต่อเรา
        </Button>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
