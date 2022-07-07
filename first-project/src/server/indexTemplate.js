export const indexTemplate = (content) => `<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Reddit</title>
        <script src="/static/client.js" type="application/javascript"></script>
    </head>
    <body>
        <div id = 'react_root'>${content}</div>
       
            </body>
</html>`