from flask import Flask, jsonify, request
from flask_cors import CORS
import openai

api="AIzaSyBFNxi3NMTKlO_FSneMBWPe5vOXzmXd4gs"
openai.api_key = "pk-MzATQIcWDTIRTnUUxCtxiJNrOaOckEPbKbfeCSPpXmtoXXsP"
openai.api_base = "https://api.pawan.krd/pai-001-light-beta/v1"
app = Flask(__name__)
CORS(app)

@app.route('/api/route', methods=['POST'])
def chatbot():
    data = request.get_json()
    user_input = data.get('text', '')

    if not user_input:
        return jsonify({'response': 'No input provided'}), 400

    response = openai.ChatCompletion.create(
        model="pai-001-light-beta",
        messages=[
            {'role': 'user', 'content': user_input},
        ],
        stream=True,
        allow_fallback=True
    )

    content_string = ""
    for chunk in response:
        content_string += chunk.choices[0].delta.get("content", "")

    response_text = content_string
    return jsonify({'response': response_text})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
