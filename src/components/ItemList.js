import React from "react";
import { Card } from "material-ui/Card";
import { List, ListItem } from "material-ui/List";
import Avatar from "material-ui/Avatar";
import { translate } from "admin-on-rest";
import { BASE_URL } from "../consts";
import CountItems from "./CountItems";

const style = { flex: 2, margin: "0 0 0 2em" };

export default translate(({ items = [], title, color, translate, type }) => (
  <div style={style}>
    <CountItems
      value={items.length}
      title={title}
      color={color}
      type={type || "issue"}
    />
    <Card>
      <List>
        {items.map(function(record) {
          const link =
            typeof record.project_extra_info !== "undefined"
              ? `${BASE_URL}/project/${record.project_extra_info
                  .slug}/${record.type}/${record.ref}`
              : "#";
          return (
            <ListItem
              key={record.id}
              href={link}
              target="_blank"
              primaryText={record.subject}
              secondaryText={record.project_extra_info.name}
              leftAvatar={
                <Avatar backgroundColor={color || "#31708f"}>
                  {record.project_extra_info.name.charAt(0)}
                </Avatar>
              }
            />
          );
        })}
      </List>
    </Card>
  </div>
));
