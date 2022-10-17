export default function TextSection({ header, children, src }) {
    return (
        <>
            <div style={{ padding: " 5% 2%", color: "#333" }}>
                <h1
                    style={{
                        textTransform: "uppercase",
                        fontSize: 18,
                        paddingBottom: 10,
                        letterSpacing: 1,
                    }}
                >
                    {header}
                </h1>
                <p style={{ fontSize: 13.5, letterSpacing: 1 }}>{children}</p>
            </div>
            <img alt='content img' src={src} />
        </>
    );
}
