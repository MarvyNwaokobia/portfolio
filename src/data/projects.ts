export type Project = {
  name: string;
  description: string;
  tags: string[];
  href: string;
  category: "Privacy & Cryptography" | "Payments & Financial Infra" | "Apps & Systems";
};

export const projects: Project[] = [
  {
    name: "Shielded Protocol",
    description:
      "A ZK privacy protocol on Stellar/Soroban that I lead. Circom circuits (Groth16 withdraw proof, Poseidon hash, nullifier derivation), Rust/Soroban contracts (commitment pool, Groth16 verifier, compliance registry), a TypeScript SDK, and a Next.js frontend.",
    tags: ["Rust", "Soroban", "Circom", "Groth16", "TypeScript"],
    href: "https://github.com/Shielded-Protocol",
    category: "Privacy & Cryptography",
  },
  {
    name: "Covert",
    description:
      "Confidential payroll on Ethereum using Zama's FHEVM. Salaries, bonuses, and peer recognition are processed fully encrypted on-chain, with per-employee decryption via EIP-712 signatures.",
    tags: ["Solidity", "FHEVM", "TypeScript"],
    href: "https://github.com/MarvyNwaokobia/Covert",
    category: "Privacy & Cryptography",
  },
  {
    name: "ficho",
    description: "Sealed-bid cross-border FX matching powered by fully homomorphic encryption.",
    tags: ["Solidity", "FHE", "TypeScript"],
    href: "https://github.com/MarvyNwaokobia/ficho",
    category: "Privacy & Cryptography",
  },
  {
    name: "StarkBet",
    description:
      "A privacy-preserving prediction market on Starknet. Bitcoin deposits via the Lightning Network are atomically swapped to STRK and shielded in a Pedersen commitment vault, keeping bets and positions unlinked on-chain.",
    tags: ["Cairo", "Starknet", "TypeScript"],
    href: "https://github.com/MarvyNwaokobia/Prediction-Market",
    category: "Privacy & Cryptography",
  },
  {
    name: "OpenBridge",
    description:
      "A Rafiki-based Open Payments account provider issuing real wallet addresses to Nigerian, UK, and US accounts.",
    tags: ["TypeScript", "Open Payments", "Noir"],
    href: "https://github.com/MarvyNwaokobia/OpenBridge",
    category: "Payments & Financial Infra",
  },
  {
    name: "bityield",
    description:
      "A Bitcoin yield dashboard connecting passive BTC holders to live yield protocols on Stacks, with no prior DeFi knowledge required.",
    tags: ["Clarity", "Stacks", "Next.js"],
    href: "https://github.com/MarvyNwaokobia/bityield",
    category: "Payments & Financial Infra",
  },
  {
    name: "Lepta",
    description: "Pay-per-second livestream payments, provably delivered and settled in USDC on Arc.",
    tags: ["TypeScript", "USDC"],
    href: "https://github.com/MarvyNwaokobia/Lepta",
    category: "Payments & Financial Infra",
  },
  {
    name: "Proov",
    description:
      "A habit-tracking and accountability dApp on Celo. Habits, focus timers, AI-verified activity logs, and friend accountability circles, with every action recorded on-chain.",
    tags: ["Solidity", "Celo", "Next.js"],
    href: "https://github.com/MarvyNwaokobia/Proov",
    category: "Apps & Systems",
  },
  {
    name: "Valor",
    description:
      "A real-time 1v1 stat-duel shooter on GoodDollar + Celo, with identity verification, XP progression, and an on-chain gear marketplace.",
    tags: ["Solidity", "Celo", "Python"],
    href: "https://github.com/MarvyNwaokobia/Valor",
    category: "Apps & Systems",
  },
  {
    name: "toy_evm",
    description: "A modular Ethereum Virtual Machine implementation in Rust.",
    tags: ["Rust", "EVM"],
    href: "https://github.com/MarvyNwaokobia/toy_evm",
    category: "Apps & Systems",
  },
  {
    name: "banking-system",
    description:
      "A command-line banking system in Rust with SQLite-backed persistence for accounts and transactions.",
    tags: ["Rust", "SQLite"],
    href: "https://github.com/MarvyNwaokobia/banking-system",
    category: "Apps & Systems",
  },
];

export const skills = {
  Languages: ["TypeScript", "JavaScript", "Python", "Rust", "Solidity", "Cairo"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML & CSS"],
  Backend: ["Node.js", "Express", "PostgreSQL", "REST APIs", "WebSockets"],
  "Web3 & Protocols": ["EVM / Solidity", "Soroban (Rust/Stellar)", "Cairo (Starknet)"],
  Cryptography: [
    "Zero-knowledge proofs (Circom, Groth16)",
    "Fully homomorphic encryption (FHE)",
    "Commitment schemes",
    "Merkle trees",
  ],
  Tooling: ["Git", "Docker", "Vercel", "Linux", "CI/CD"],
};
