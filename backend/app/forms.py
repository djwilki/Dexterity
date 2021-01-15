from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, IntegerField
from wtforms.validators import InputRequired, Length, Email


class EmailForm(FlaskForm):
    userEmail = StringField("Email", validators=[InputRequired("Please provide a valid email."), Email()])

class LoginForm(FlaskForm):
    emailOrUsername = StringField("EmailOrUsername", validators=[InputRequired("Please provide a valid username or email.")])
