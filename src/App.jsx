import './styles/App.css'

function App() {

  return (
    <div>
      <h1>Global Styling Example</h1>
      <p>
        This paragraph demonstrates the text overflow and line-height
        properties.
      </p>
      <svg width="100" height="100">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="black"
          stroke-width="3"
          fill="red"
        />
      </svg>
      <form>
        <input type="text" placeholder="Inherited font style" />
        <button type="submit">Submit</button>
        <textarea placeholder="Inherited font style"></textarea>
        <select>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </form>
      <video controls>
        <source src="/assets/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img src="/assets/background_snow.jpg" alt="Sample Image" />
    </div>
  );
}

export default App
