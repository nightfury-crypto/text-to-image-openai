import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { Dna } from "react-loader-spinner";

export default function Home() {
  const [image, setImage] = useState(null);
  const [fetchImageLoader, setFetchImageLoader] = useState(false);
  const [prompt, setPrompt] = useState("")

  const handlegenerate = async () => {
    if (!prompt || prompt.trim() === "") return alert("Please enter your imagination");

    try {
      setFetchImageLoader(true);
      const response = await fetch("http://localhost:5000/api/v1/aigen", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: prompt }),
      });

      const imageData = await response.json();
      const photoUrl = `data:image/jpeg;base64,${imageData.photo}`;
      setImage(photoUrl);
      setFetchImageLoader(false);
    } catch (error) {
      console.log(error);
    } finally {
      setFetchImageLoader(false);
    }
  };

  return (
    <div className={styles.home}>
      <h1 className={styles.title}>AI Image Generator</h1>

    <input type="text" placeholder="Enter your imagination" className={styles.input} value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
      <button onClick={handlegenerate} className={styles.btn}>Click here to generate</button>
      {fetchImageLoader ? (
        <div className={styles.loadingwrapper}>
          <Dna visible={true} height="60" width="60" />
          <p>generating please wait...</p>
        </div>
      ) : (
        <>
          {image ? (
            <div className={styles.displayimage}>
            <img src={image} alt="Generated Image" />
            </div>
          ) : (
            <div className={styles.displayimage}>
              <img src="/img-ui.jpg" alt="no image" />
            </div>
          )}
        </>
      )}
    </div>
  );
}
