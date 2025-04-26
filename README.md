<h1 align="center">🏥 Bharat Health</h1>

<p align="center">
  A dynamic and secure web application to <b>digitize, manage, and access health records</b> anytime and anywhere, with special portals for <b>users</b> and <b>doctors</b>.
  <br><br>
  It also integrates a smart <b>AI Assistant</b> (powered by ChatGPT) to answer user queries related to health data.
</p>

<hr>

<h2>🚀 Features</h2>

<ul>
  <li><b>User Authentication</b> with Clerk</li>
  <li><b>Role-based Login</b> (User / Doctor)</li>
  <li><b>Persistent Sessions</b> (no redirect on refresh)</li>
  <li><b>Dynamic Sidebar</b> with hover-expand animation</li>
  <li><b>Profile Picture Upload</b> during Signup</li>
  <li><b>Personalized Landing Page</b> with greeting popup (shown only once)</li>
  <li><b>AI Assistant</b> to ask health-related queries</li>
  <li><b>BMI Calculator</b> to calculate Body Mass Index</li>
  <li><b>Separate Dashboards</b> for users and doctors</li>
  <li><b>Clean and ChatGPT-like Ask AI Page UI</b></li>
</ul>

<hr>

<h2>🧑‍💻 Tech Stack</h2>

<ul>
  <li><b>Frontend:</b> React.js, TailwindCSS, ShadCN UI</li>
  <li><b>Authentication:</b> Clerk</li>
  <li><b>Database:</b> Clerk User Metadata (for storing role)</li>
  <li><b>AI API:</b> OpenAI GPT-3.5 (for Ask AI Assistant)</li>
  <li><b>Routing:</b> React Router DOM</li>
  <li><b>State Management:</b> React Context API</li>
</ul>

<hr>

<h2>📦 Installation</h2>

<ol>
  <li><b>Clone the Repository</b>
    <pre><code>git clone https://github.com/your-username/health-info-management.git
cd health-info-management</code></pre>
  </li>
  
  <li><b>Install Dependencies</b>
    <pre><code>npm install</code></pre>
  </li>

  <li><b>Setup Clerk Authentication</b>
    <ul>
      <li>Go to <a href="https://clerk.dev/" target="_blank">Clerk.dev</a></li>
      <li>Create an application and copy your <b>Frontend API Key</b> and <b>Publishable Key</b>.</li>
      <li>Replace Clerk keys in your <code>.env</code> file:
        <pre><code>VITE_CLERK_PUBLISHABLE_KEY=your-publishable-key
VITE_CLERK_FRONTEND_API=your-frontend-api</code></pre>
      </li>
    </ul>
  </li>

  <li><b>Setup OpenAI API</b>
    <ul>
      <li>Create an account on <a href="https://openai.com/" target="_blank">OpenAI</a></li>
      <li>Generate an <b>API key</b> and add to <code>.env</code>:
        <pre><code>VITE_OPENAI_API_KEY=your-openai-api-key</code></pre>
      </li>
    </ul>
  </li>

  <li><b>Run Locally</b>
    <pre><code>npm run dev</code></pre>
  </li>
</ol>

<hr>

<h2>✨ Key Functionalities</h2>

<h3>1. User Authentication</h3>
<ul>
  <li>Sign-in / Sign-up using Clerk</li>
  <li>Upload profile picture during signup</li>
  <li>Metadata field <code>role</code> assigned as <code>user</code> or <code>doctor</code></li>
</ul>

<h3>2. Sidebar Navigation</h3>
<ul>
  <li>Hover to expand sidebar</li>
  <li>Sidebar includes: Home, Health Records, Reports, Ask AI Assistance, Profile Info, Logout</li>
</ul>

<h3>3. AI Chat Assistant</h3>
<ul>
  <li>UI replicates ChatGPT chat flow</li>
  <li>Basic dynamic responses using OpenAI GPT-3.5 API</li>
</ul>

<h3>4. BMI Calculator</h3>
<ul>
  <li>Input Height (cm) and Weight (kg)</li>
  <li>Displays BMI score and category</li>
</ul>

<h3>5. Doctor Section</h3>
<ul>
  <li>Separate <b>Doctor Login Button</b> on Sign-in page</li>
  <li>Redirects doctor to their custom dashboard</li>
</ul>

<hr>

<h2>⚡ Future Enhancements</h2>

<ul>
  <li>Add file upload for medical reports</li>
  <li>Integrate Firebase or Supabase for health record storage</li>
  <li>Advanced AI Diagnosis Suggestions</li>
  <li>Real-time doctor-patient chat functionality</li>
  <li>Notifications and reminders for doctor appointments</li>
</ul>

<hr>


<h2>📜 License</h2>

<p>
MIT License<br><br>

Copyright (c) 2025 Shrey Joshi
<br><br>
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
<br><br>
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
<br><br>
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
</p>


<h1 align="center"> Let's Digitize Healthcare Together!</h1>
