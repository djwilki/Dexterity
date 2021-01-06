from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, IntegerField
from wtforms.validators import InputRequired, Length, Email


class EmailForm(FlaskForm):
    userEmail = StringField("Email", validators=[InputRequired("Please provide a valid email."), Email()])
