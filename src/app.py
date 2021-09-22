from flask import Flask
import traceback

app = Flask(__name__, static_url_path="/static", static_folder="static")


@app.route("/")
def page_root():
    return app.send_static_file("pages/index.html")


@app.route("/projects")
def page_projects():
    return app.send_static_file("pages/projects.html")


@app.route("/amogus")
def page_amogus():
    return app.send_static_file("pages/amogus.html")


@app.errorhandler(404)
def page_404(e):
    return app.send_static_file("pages/404.html")


@app.errorhandler(500)
def page_500(e):
    print("".join(traceback.format_exception(type(e), e, e.__traceback__, 4)))
    return app.send_static_file("pages/500.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80)
