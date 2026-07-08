
function Layout({ children }) {
    return (
        <div className="layout">
            <header className="layout-header"> KAVITHA THEATERS </header>
            <main className="layout-content">
                {children}
            </main>

            <footer className="layout-footer">
                <div className="footer-content">
                    <p>Contact us: 123-456-7890 | Email: info@kavithatheaters.com</p>
                    <p>&copy; 2023 Kavitha Theaters. All rights reserved.</p>
                    <p>Address: 123 Cinema Street, Movie City</p>
                  </div>
            </footer>
        </div>
    );
}

export default Layout;