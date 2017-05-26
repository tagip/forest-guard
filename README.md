Forest Guard is a [Taiga](https://taiga.io/) dashboard for managers to see who is doing what on their different Taiga projects. It is built using the great [admin-on-rest](https://marmelab.com/admin-on-rest/) framework.

The main view is a grid list of users and their assigned tasks and issues that are not closed yet. 

![ScreenShot](./screenshot.png)

## Start the project

### For development

You will need yarn installed on your computer and an accessible Taiga instance. The Taiga API url should be passed in the `REACT_APP_API_URL` environment variable like so :

```
→ REACT_APP_API_URL=http://taiga.tag-ip.com/api/v1 yarn start
```
