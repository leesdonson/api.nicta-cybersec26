export const emailTemplate = `<html>
    <body>
        <div style="text-align: center; border: 1px solid black; padding: 20px; border-radius: 10px;">
            <h2 style="color: red;">Critical Security Alert!</h2>
            <p style="color: blue;font-weight: bold;font-size: 20px;">Your Account Is Under Attack and Needs Immediate Attention.</p>
            <p style="font-weight: bold;font-size: 16px;">Please use the link below to change your password immediately.</p>
            <div style="text-align: center;margin-top: 20px;">
            <a style="text-decoration: underline;font-weight: bold;" href="{url}">Change Password Now.</a>
            </div>
        </div>
    </body>
</html>`;
