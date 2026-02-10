# Time Bandit 🕐

A comprehensive mobile app for employee time tracking, task management via camera/social media, GPS tracking, and supervisor communication.

## Features

- ⏱️ **Hours Tracking** - Real-time work hour monitoring
- 📸 **Task Tracking** - Camera and social media integration for task documentation
- 🗺️ **GPS Tracking** - Employee location monitoring with privacy controls
- 💬 **Communication** - Efficient messaging between employees and supervisors
- ⏰ **Overtime Management** - Toggle-able overtime tracking
- 📊 **Profile Builder** - Accomplishment logging and growth visualization
- 📈 **Progress Analytics** - Performance metrics and insights

## Tech Stack

- **Frontend**: React Native + Expo (iOS & Android)
- **Backend**: Node.js + NestJS with TypeScript
- **Database**: PostgreSQL + Redis
- **Real-time**: WebSockets (Socket.io)
- **Authentication**: JWT + OAuth2
- **Location**: Google Maps API + Native GPS
- **Cloud**: AWS/Firebase

## Project Structure

```
time-bandit/
├── backend/              # NestJS backend server
├── mobile/               # React Native Expo app
├── docs/                 # Documentation
├── docker-compose.yml    # Local development setup
├── README.md
└── CONTRIBUTING.md
```

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Expo CLI: `npm install -g expo-cli`
- Docker & Docker Compose (optional)

### Development

```bash
# Clone and install
git clone https://github.com/Standbeneath/time-bandit.git
cd time-bandit

# Install dependencies
npm install

# Start backend
cd backend && npm run dev

# Start mobile app (in new terminal)
cd mobile && npm run start
```

## Documentation

- [Backend API Docs](./backend/docs/API.md)
- [Mobile Setup Guide](./mobile/docs/SETUP.md)
- [Architecture Overview](./docs/ARCHITECTURE.md)
- [Database Schema](./docs/DATABASE.md)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## Security

See [SECURITY.md](SECURITY.md)

## License

MIT - See [LICENSE](LICENSE)

## Contact

For questions or support, open an issue on GitHub.