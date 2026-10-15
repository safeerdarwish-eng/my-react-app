

const isDark = false;

function DarkMode() {
  return (
    <h1
      style={{
        color: isDark ? "white" : "black",
        backgroundColor: isDark ? "black" : "white",
      }}
    >
      Hello
    </h1>
  );
}

export default DarkMode;