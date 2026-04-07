import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        .privacy-policy {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial;
          line-height: 1.7;
          padding: 20px;
          max-width: 900px;
          margin: auto;
          color: #333;
        }
        .privacy-policy h1,
        .privacy-policy h2,
        .privacy-policy h3 {
          color: #111;
        }
        .privacy-policy h1 {
          border-bottom: 2px solid #eee;
          padding-bottom: 10px;
        }
        .privacy-policy ul {
          padding-left: 20px;
        }
        .privacy-policy .highlight {
          background: #f5f7ff;
          padding: 12px;
          border-radius: 8px;
          margin: 10px 0;
        }
      `}</style>

      <div className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-[900px] items-center justify-between px-5 py-4">
          <div className="font-semibold text-gray-900">ChainNotes</div>
          <Link to="/" className="text-sm font-medium text-green-700 hover:text-green-800">
            返回首页
          </Link>
        </div>
      </div>

      <div className="privacy-policy">
        <h1>Privacy Policy</h1>
        <p>Last Updated: April 6, 2026</p>

        <h2>Your Privacy Matters</h2>
        <p>
          Welcome to <strong>ChainNotes</strong>. We value your privacy and data security. This policy
          explains what information we may process, how we use and protect it, and your rights when
          using this application.
        </p>

        <h2>Our Privacy Commitments</h2>
        <div className="highlight">
          <ul>
            <li>Your private keys and mnemonic phrases remain on your device only — we cannot access or recover them</li>
            <li>No data selling, no advertising profiling (based on current implementation)</li>
            <li>Industry-standard encryption and secure transmission practices</li>
            <li>You have rights to access, correct, and delete data (except public blockchain/IPFS data)</li>
          </ul>
        </div>

        <h2>1. Our Core Principles</h2>
        <p>
          • Decentralization-first: sensitive data and assets remain under your control
          <br />
          • Data minimization: only necessary information is processed
          <br />
          • Self-custody: we do not collect or store private keys or mnemonic phrases
          <br />
          • Transparency: blockchain data is publicly verifiable; we clearly distinguish local, on-chain, and IPFS data
        </p>

        <h2>2. Information We Collect</h2>

        <h3>2.1 Automatically Generated Information</h3>
        <ul>
          <li>Wallet addresses and public keys</li>
          <li>Public blockchain transaction records</li>
        </ul>

        <h3>2.2 Information You Provide</h3>
        <ul>
          <li>Notes content</li>
          <li>Images or attachments</li>
          <li>Feedback or communication messages</li>
        </ul>

        <h3>2.3 Usage and Device Information</h3>
        <ul>
          <li>Anonymous usage statistics (if enabled)</li>
          <li>Crash and diagnostic logs (if enabled)</li>
          <li>Device model, OS, and app version</li>
        </ul>

        <h3>2.4 What We Do NOT Collect</h3>
        <ul>
          <li>Private keys or mnemonic phrases</li>
          <li>Personal identity information (e.g., name, ID, phone number)</li>
          <li>Precise location data (unless explicitly authorized in future features)</li>
        </ul>

        <h2>3. Data Storage and Processing</h2>

        <h3>3.1 Local Storage</h3>
        <ul>
          <li>Encrypted private keys / mnemonic phrases</li>
          <li>Notes and attachments</li>
          <li>App settings and preferences</li>
        </ul>

        <h3>3.2 Blockchain</h3>
        <p>
          When you choose to anchor content on-chain, related transaction data becomes publicly accessible and typically cannot be modified or deleted.
        </p>

        <h3>3.3 IPFS</h3>
        <p>Content uploaded to IPFS may be publicly accessible via CID or gateways, depending on storage configuration.</p>

        <h3>3.4 Push Notifications</h3>
        <p>We may use system push services (such as Firebase Cloud Messaging) to deliver notifications.</p>

        <h2>4. How We Use Data</h2>
        <ul>
          <li>Provide core app functionality</li>
          <li>Execute blockchain and IPFS operations initiated by you</li>
          <li>Improve performance, stability, and security</li>
        </ul>

        <h2>5. Our Commitments</h2>
        <ul>
          <li>We do not sell your data</li>
          <li>We do not perform ad tracking or profiling</li>
          <li>We never store private keys or mnemonic phrases</li>
        </ul>

        <h2>6. Data Sharing</h2>
        <ul>
          <li>Blockchain data is inherently public</li>
          <li>We may use third-party services (e.g., push notifications, IPFS infrastructure)</li>
          <li>Disclosure may occur if required by law</li>
        </ul>

        <h2>7. Data Security</h2>
        <ul>
          <li>Encryption for storage and transmission</li>
          <li>Access control (password/biometric, if enabled)</li>
          <li>Security monitoring</li>
        </ul>

        <p>
          <strong>⚠️ Please securely back up your mnemonic phrase. Lost keys cannot be recovered.</strong>
        </p>

        <h2>8. Your Rights</h2>
        <p>You may access, correct, or delete your data where applicable. However, blockchain and IPFS data are typically immutable and cannot be removed.</p>

        <h2>9. Local Preferences and Analytics</h2>
        <p>We use local storage instead of cookies and do not track users across apps.</p>

        <h2>10. Children's Privacy</h2>
        <p>This service is not intended for children under 13.</p>

        <h2>11. Data Retention</h2>
        <ul>
          <li>Local data: controlled by you</li>
          <li>Blockchain/IPFS: may persist indefinitely</li>
        </ul>

        <h2>12. Policy Updates</h2>
        <p>We may update this policy. Continued use indicates acceptance of updates.</p>

        <h2>13. Contact Us</h2>
        <p>
          Email: onchainnotes@gmail.com
          <br />
          In-app: Feedback section
        </p>

        <hr />

        <p>Your privacy and security are our top priorities</p>
        <p>© 2026 ChainNotes</p>
      </div>
    </div>
  );
}

