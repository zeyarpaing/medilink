// import { PrismaClient } from '@prisma/client';
const PrismaClient = require('@prisma/client').PrismaClient;
const cliProgress = require('cli-progress');

const prisma = new PrismaClient();
const providers = [
  {
    address: '123 Main Street, City, Country',
    description: 'A large and reputable hospital in the city.',
    email: 'hospitalA@example.com',
    image: 'https://example.com/hospitalA-image.jpg',
    name: 'Hospital A',
    phone: '+1 (123) 456-7890',
    type: 'hospital',
  },
  {
    address: '456 Elm Street, Town, Country',
    description: 'A friendly neighborhood clinic providing quality care.',
    email: 'clinicB@example.com',
    image: 'https://example.com/clinicB-image.jpg',
    name: 'Clinic B',
    phone: '+1 (456) 789-0123',
    type: 'clinic',
  },
  {
    address: '789 Oak Avenue, Village, Country',
    description: 'A state-of-the-art medical center with specialized services.',
    email: 'centerC@example.com',
    image: 'https://example.com/centerC-image.jpg',
    name: 'Medical Center C',
    phone: '+1 (789) 012-3456',
    type: 'hospital',
  },
  {
    address: '123 Main Street, New York, USA',
    description: 'A leading hospital with a long history of patient care.',
    email: 'stjohn@example.com',
    image: 'https://example.com/hospitalA-image.jpg',
    name: "Saint John's Hospital",
    phone: '+1 (123) 456-7890',
    type: 'hospital',
  },
  {
    address: '456 Elm Street, Los Angeles, USA',
    description: 'A friendly clinic dedicated to family healthcare.',
    email: 'greenwood@example.com',
    image: 'https://example.com/clinicB-image.jpg',
    name: 'Greenwood Clinic',
    phone: '+1 (456) 789-0123',
    type: 'clinic',
  },
  {
    address: '789 Oak Avenue, Chicago, USA',
    description: 'A modern medical center offering specialized treatments.',
    email: 'centralmed@example.com',
    image: 'https://example.com/centerC-image.jpg',
    name: 'Central Medical Center',
    phone: '+1 (789) 012-3456',
    type: 'hospital',
  },
  {
    address: '101 River Road, San Francisco, USA',
    description: 'Committed to excellence in patient care and research.',
    email: 'memorial@example.com',
    image: 'https://example.com/hospitalD-image.jpg',
    name: 'Memorial Hospital',
    phone: '+1 (415) 555-6789',
    type: 'hospital',
  },
  {
    address: '246 Park Avenue, Miami, USA',
    description: 'Promoting a healthy lifestyle for all patients.',
    email: 'healthyliving@example.com',
    image: 'https://example.com/clinicE-image.jpg',
    name: 'Healthy Living Clinic',
    phone: '+1 (305) 678-1234',
    type: 'clinic',
  },
  {
    address: '555 Mercy Lane, Boston, USA',
    description: 'Dedicated to compassionate healthcare services.',
    email: 'mercy@example.com',
    image: 'https://example.com/hospitalF-image.jpg',
    name: 'Mercy Medical Center',
    phone: '+1 (617) 123-4567',
    type: 'hospital',
  },
  {
    address: '789 Oak Street, Philadelphia, USA',
    description: 'Providing care with a personal touch for all patients.',
    email: 'caringhands@example.com',
    image: 'https://example.com/clinicG-image.jpg',
    name: 'Caring Hands Clinic',
    phone: '+1 (215) 987-6543',
    type: 'clinic',
  },
  {
    address: '101 Sunrise Boulevard, Houston, USA',
    description: 'A new day in healthcare, where every sunrise brings hope.',
    email: 'sunrise@example.com',
    image: 'https://example.com/hospitalH-image.jpg',
    name: 'Sunrise Hospital',
    phone: '+1 (713) 456-7890',
    type: 'hospital',
  },
  {
    address: '246 Wellness Avenue, Seattle, USA',
    description: 'Your partner in urban wellness and healthcare.',
    email: 'citywellness@example.com',
    image: 'https://example.com/clinicI-image.jpg',
    name: 'City Wellness Clinic',
    phone: '+1 (206) 789-0123',
    type: 'clinic',
  },
  {
    address: '777 Grace Street, Atlanta, USA',
    description: 'Where grace meets medical expertise.',
    email: 'grace@example.com',
    image: 'https://example.com/hospitalJ-image.jpg',
    name: 'Grace Hospital',
    phone: '+1 (404) 567-8901',
    type: 'hospital',
  },
];
const servicesData = [
  {
    description: 'Comprehensive evaluation and treatment for heart conditions.',
    image: 'https://example.com/cardiology-image.jpg',
    name: 'Cardiology Consultation',
  },
  {
    description: 'Specialized healthcare for infants, children, and adolescents.',
    image: 'https://example.com/pediatrics-image.jpg',
    name: 'Pediatric Care',
  },
  {
    description: 'Expert surgical procedures for musculoskeletal issues.',
    image: 'https://example.com/orthopedics-image.jpg',
    name: 'Orthopedic Surgery',
  },
  {
    description: 'Diagnosis and treatment of skin-related conditions and concerns.',
    image: 'https://example.com/dermatology-image.jpg',
    name: 'Dermatology Appointment',
  },
  {
    description: 'Rehabilitation and exercise programs to improve physical function.',
    image: 'https://example.com/physical-therapy-image.jpg',
    name: 'Physical Therapy',
  },
];

async function main() {
  console.log('Seeding started.');
  const progress = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
  // const servicesData = servicesDummy.slice(0, Math.max(2, Math.floor(Math.random() * servicesDummy.length)));

  const totalProgress = providers.length + providers.length * servicesData.length;
  progress.start(totalProgress, 0);
  // Create 50 healthcare providers with types "hospital" and "clinic"

  const healthcareProviders = [];
  for (let i = 0; i < providers.length; i++) {
    const randomProvider = providers[i];
    const healthcareProvider = await prisma.healthcareProvider.create({
      data: {
        address: randomProvider.address,
        description: randomProvider.description,
        email: randomProvider.email,
        image: randomProvider.image,
        name: randomProvider.name,
        phone: randomProvider.phone,
        type: randomProvider.type,
      },
    });
    healthcareProviders.push(healthcareProvider);
    progress.increment();
  }

  // Create bookings, schedules, and services for each healthcare provider
  for (const provider of healthcareProviders) {
    const services = [];
    const schedules = [];

    for (let i of servicesData) {
      // Create services
      const service = await prisma.service.create({
        data: {
          ...i,
          healthcareProviderId: provider.id,
        },
      });
      services.push(service);

      // Create schedules
      const schedule = await prisma.schedule.create({
        data: {
          date: new Date(),
          duration: 15 + Math.floor(Math.random() * 12), // Assuming 15-minute intervals
          maxBooking: 10 + Math.floor(Math.random() * 10),
          serviceId: service.id,
          time: new Date(),
        },
      });
      schedules.push(schedule);
      progress.increment();
    }
  }
  progress.update(totalProgress);
  progress.stop();
}

main()
  .then(async () => {
    console.log('Data seeding completed.');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
