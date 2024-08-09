from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/message', methods=['POST'])
def message():
    data = request.json
    user_message = data.get('message')
    response_message = f"Received: {user_message}"
    return jsonify({'response': response_message})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
