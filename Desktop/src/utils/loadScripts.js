// utils/loadScripts.js

const loadScripts = (scripts) => {
  const head = document.head; // Get the <head> element where scripts are inserted

  scripts.forEach((script) => {
    // Check if the script already exists
    const existingScript = document.querySelector(`script[src="${script.src}"]`);
    
    if (!existingScript) {
      // If the script doesn't exist, create a new <script> element
      const scriptElement = document.createElement('script');
      scriptElement.src = script.src;
      scriptElement.type = script.type || 'text/javascript'; // Default to 'text/javascript'
      scriptElement.async = script.async || true; // Default to async loading
      scriptElement.onload = () => {
        console.log(`${script.src} loaded successfully.`); // Log when the script is loaded
      };
      scriptElement.onerror = (err) => {
        console.error(`Error loading script: ${script.src}`, err); // Log error if the script fails to load
      };

      // Append the script to the head
      head.appendChild(scriptElement);
    }
  });
};

export default loadScripts;
