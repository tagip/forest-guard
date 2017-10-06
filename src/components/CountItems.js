import React from "react";
import { Card, CardTitle } from "material-ui/Card";
import PendingIcon from "material-ui/svg-icons/action/assignment";
import BugIcon from "material-ui/svg-icons/action/bug-report";
import TaskIcon from "material-ui/svg-icons/action/assignment-ind";
import { translate } from "admin-on-rest";

class CountPending extends React.Component {
  styles = {
    card: { borderLeft: "solid 4px", flex: "1", marginBottom: "1em" },
    icon: { float: "right", width: 64, height: 64, padding: 16 }
  };

  render() {
    const { value, translate, color, title, type } = this.props;
    let Icon;

    switch (type) {
      case "issue":
        Icon = BugIcon;
        break;
      case "task":
        Icon = TaskIcon;
        break;
      default:
        Icon = PendingIcon;
        break;
    }

    return (
      <Card
        style={{ ...this.styles.card, borderLeftColor: color || "#31708f" }}
      >
        <Icon style={{ ...this.styles.icon, color: color || "#31708f" }} />
        <CardTitle title={value} subtitle={translate(title)} />
      </Card>
    );
  }
}

export default translate(CountPending);
