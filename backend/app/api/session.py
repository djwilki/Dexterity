from flask import Blueprint, request, make_response
from sqlalchemy import or_
from flask_login import login_user, current_user, logout_user
from app.auth import login_manager
from werkzeug.datastructures import MultiDict
from flask_wtf.csrf import generate_csrf
from flask_mail import Message


session = Blueprint("session", __name__)



@session.route("/csrf", methods=["GET"])
def csrf():
    res = make_response("Setting csrf token")
    res.set_cookie("XSRF-TOKEN", generate_csrf())
    return res

@session.route("/email", methods=["POST"])
def email()
    data = MultiDict(mapping=request.json)
    form = LoginForm(data)
    if form.validate():
        msg = Message(data['title'], sender=(data['name'], data['userEmail'])
        )
        msg.body = data['message']
        mail.send(msg)

@login_manager.user_loader
def load_user(user_id):
    if user_id is not None:
        return User.query.get(user_id)
    return None
