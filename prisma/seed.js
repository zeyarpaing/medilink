// import { PrismaClient } from '@prisma/client';
const PrismaClient = require('@prisma/client').PrismaClient;
const prisma = new PrismaClient();

async function main() {
  // Create 50 healthcare providers with types "hospital" and "clinic"
  const providers = [
    {
      description: 'A large and reputable hospital in the city.',
      image: 'https://example.com/hospitalA-image.jpg',
      address: '123 Main Street, City, Country',
      email: 'hospitalA@example.com',
      phone: '+1 (123) 456-7890',
      name: 'Hospital A',
      type: 'hospital',
    },
    {
      description: 'A friendly neighborhood clinic providing quality care.',
      image: 'https://example.com/clinicB-image.jpg',
      address: '456 Elm Street, Town, Country',
      email: 'clinicB@example.com',
      phone: '+1 (456) 789-0123',
      name: 'Clinic B',
      type: 'clinic',
    },
    {
      description: 'A state-of-the-art medical center with specialized services.',
      image: 'https://example.com/centerC-image.jpg',
      address: '789 Oak Avenue, Village, Country',
      email: 'centerC@example.com',
      phone: '+1 (789) 012-3456',
      name: 'Medical Center C',
      type: 'hospital',
    },
    {
      description: 'A leading hospital with a long history of patient care.',
      image: 'https://example.com/hospitalA-image.jpg',
      address: '123 Main Street, New York, USA',
      name: "Saint John's Hospital",
      email: 'stjohn@example.com',
      phone: '+1 (123) 456-7890',
      type: 'hospital',
    },
    {
      description: 'A friendly clinic dedicated to family healthcare.',
      image: 'https://example.com/clinicB-image.jpg',
      address: '456 Elm Street, Los Angeles, USA',
      email: 'greenwood@example.com',
      phone: '+1 (456) 789-0123',
      name: 'Greenwood Clinic',
      type: 'clinic',
    },
    {
      description: 'A modern medical center offering specialized treatments.',
      image: 'https://example.com/centerC-image.jpg',
      address: '789 Oak Avenue, Chicago, USA',
      email: 'centralmed@example.com',
      name: 'Central Medical Center',
      phone: '+1 (789) 012-3456',
      type: 'hospital',
    },
    {
      description: 'Committed to excellence in patient care and research.',
      image: 'https://example.com/hospitalD-image.jpg',
      address: '101 River Road, San Francisco, USA',
      email: 'memorial@example.com',
      phone: '+1 (415) 555-6789',
      name: 'Memorial Hospital',
      type: 'hospital',
    },
    {
      description: 'Promoting a healthy lifestyle for all patients.',
      image: 'https://example.com/clinicE-image.jpg',
      address: '246 Park Avenue, Miami, USA',
      email: 'healthyliving@example.com',
      name: 'Healthy Living Clinic',
      phone: '+1 (305) 678-1234',
      type: 'clinic',
    },
    {
      description: 'Dedicated to compassionate healthcare services.',
      image: 'https://example.com/hospitalF-image.jpg',
      address: '555 Mercy Lane, Boston, USA',
      name: 'Mercy Medical Center',
      email: 'mercy@example.com',
      phone: '+1 (617) 123-4567',
      type: 'hospital',
    },
    {
      description: 'Providing care with a personal touch for all patients.',
      image: 'https://example.com/clinicG-image.jpg',
      address: '789 Oak Street, Philadelphia, USA',
      email: 'caringhands@example.com',
      name: 'Caring Hands Clinic',
      phone: '+1 (215) 987-6543',
      type: 'clinic',
    },
    {
      description: 'A new day in healthcare, where every sunrise brings hope.',
      image: 'https://example.com/hospitalH-image.jpg',
      address: '101 Sunrise Boulevard, Houston, USA',
      email: 'sunrise@example.com',
      phone: '+1 (713) 456-7890',
      name: 'Sunrise Hospital',
      type: 'hospital',
    },
    {
      description: 'Your partner in urban wellness and healthcare.',
      image: 'https://example.com/clinicI-image.jpg',
      address: '246 Wellness Avenue, Seattle, USA',
      email: 'citywellness@example.com',
      name: 'City Wellness Clinic',
      phone: '+1 (206) 789-0123',
      type: 'clinic',
    },
    {
      description: 'Where grace meets medical expertise.',
      image: 'https://example.com/hospitalJ-image.jpg',
      address: '777 Grace Street, Atlanta, USA',
      email: 'grace@example.com',
      phone: '+1 (404) 567-8901',
      name: 'Grace Hospital',
      type: 'hospital',
    },
  ];
  const healthcareProviders = [];
  for (let i = 0; i < providers.length; i++) {
    const randomProvider = providers[i];
    const healthcareProvider = await prisma.healthcareProvider.create({
      data: {
        description: randomProvider.description,
        address: randomProvider.address,
        image: randomProvider.image,
        email: randomProvider.email,
        phone: randomProvider.phone,
        type: randomProvider.type,
        name: randomProvider.name,
      },
    });
    healthcareProviders.push(healthcareProvider);
  }

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
  // Create bookings, schedules, and services for each healthcare provider
  for (const provider of healthcareProviders) {
    const services = [];
    const schedules = [];
    const transactions = [];

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
          serviceId: service.id,
          date: new Date(),
          time: new Date(),
          duration: 15, // Assuming 15-minute intervals
        },
      });
      schedules.push(schedule);

      // Create transactions and bookings
      const transaction = await prisma.transaction.create({
        data: {
          paymentMethod: 'Credit Card',
        },
      });
      const booking = await prisma.booking.create({
        data: {
          username: `User ${i} for ${provider.name}`,
          transactionId: transaction.id,
          email: `user${i}@example.com`,
          phone: `User Phone ${i}`,
          scheduleId: schedule.id,
        },
      });
      transactions.push(transaction);
    }
  }
}

main()
  .then(async () => {
    console.log('Dummy data has been seeded.');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
