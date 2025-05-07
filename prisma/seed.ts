/* eslint-disable no-console */
import { PrismaClient, Status } from '@prisma/client';
const prisma = new PrismaClient();

const main = async () => {
  console.log('🔥 Starting seeding...');

  // Clean up existing data
  await prisma.serviceRecord.deleteMany({});
  await prisma.bike.deleteMany({});
  await prisma.customer.deleteMany({});

  console.log('🧹 Cleaned up existing data');

  // Create 10 Customers
  const customers = await Promise.all([
    prisma.customer.create({
      data: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
      },
    }),
    prisma.customer.create({
      data: {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '987-654-3210',
      },
    }),
    prisma.customer.create({
      data: {
        name: 'Robert Johnson',
        email: 'robert.johnson@example.com',
        phone: '555-123-4567',
      },
    }),
    prisma.customer.create({
      data: {
        name: 'Emily Davis',
        email: 'emily.davis@example.com',
        phone: '222-333-4444',
      },
    }),
    prisma.customer.create({
      data: {
        name: 'Michael Wilson',
        email: 'michael.wilson@example.com',
        phone: '777-888-9999',
      },
    }),
    prisma.customer.create({
      data: {
        name: 'Sarah Taylor',
        email: 'sarah.taylor@example.com',
        phone: '444-555-6666',
      },
    }),
    prisma.customer.create({
      data: {
        name: 'David Brown',
        email: 'david.brown@example.com',
        phone: '111-222-3333',
      },
    }),
    prisma.customer.create({
      data: {
        name: 'Jennifer Martinez',
        email: 'jennifer.martinez@example.com',
        phone: '666-777-8888',
      },
    }),
    prisma.customer.create({
      data: {
        name: 'Daniel Anderson',
        email: 'daniel.anderson@example.com',
        phone: '999-000-1111',
      },
    }),
    prisma.customer.create({
      data: {
        name: 'Lisa Thomas',
        email: 'lisa.thomas@example.com',
        phone: '333-444-5555',
      },
    }),
  ]);

  console.log('👤 Created 10 customers');

  // Create 15 Bikes (at least one for each customer, some have multiple)
  const bikes = await Promise.all([
    // Customer 1's bikes
    prisma.bike.create({
      data: {
        brand: 'Yamaha',
        model: 'R15',
        year: 2022,
        customerId: customers[0].customerId,
      },
    }),
    prisma.bike.create({
      data: {
        brand: 'Honda',
        model: 'CBR150R',
        year: 2021,
        customerId: customers[0].customerId,
      },
    }),
    // Customer 2's bikes
    prisma.bike.create({
      data: {
        brand: 'Kawasaki',
        model: 'Ninja 300',
        year: 2023,
        customerId: customers[1].customerId,
      },
    }),
    // Customer 3's bikes
    prisma.bike.create({
      data: {
        brand: 'Suzuki',
        model: 'Gixxer',
        year: 2020,
        customerId: customers[2].customerId,
      },
    }),
    prisma.bike.create({
      data: {
        brand: 'Ducati',
        model: 'Monster',
        year: 2021,
        customerId: customers[2].customerId,
      },
    }),
    // Customer 4's bike
    prisma.bike.create({
      data: {
        brand: 'BMW',
        model: 'S1000RR',
        year: 2022,
        customerId: customers[3].customerId,
      },
    }),
    // Customer 5's bike
    prisma.bike.create({
      data: {
        brand: 'Harley-Davidson',
        model: 'Sportster',
        year: 2020,
        customerId: customers[4].customerId,
      },
    }),
    // Customer 6's bikes
    prisma.bike.create({
      data: {
        brand: 'Triumph',
        model: 'Street Triple',
        year: 2021,
        customerId: customers[5].customerId,
      },
    }),
    prisma.bike.create({
      data: {
        brand: 'KTM',
        model: 'Duke 390',
        year: 2022,
        customerId: customers[5].customerId,
      },
    }),
    // Customer 7's bike
    prisma.bike.create({
      data: {
        brand: 'Aprilia',
        model: 'RSV4',
        year: 2023,
        customerId: customers[6].customerId,
      },
    }),
    // Customer 8's bike
    prisma.bike.create({
      data: {
        brand: 'Honda',
        model: 'Gold Wing',
        year: 2021,
        customerId: customers[7].customerId,
      },
    }),
    // Customer 9's bikes
    prisma.bike.create({
      data: {
        brand: 'Yamaha',
        model: 'MT-09',
        year: 2022,
        customerId: customers[8].customerId,
      },
    }),
    prisma.bike.create({
      data: {
        brand: 'Kawasaki',
        model: 'Z900',
        year: 2020,
        customerId: customers[8].customerId,
      },
    }),
    // Customer 10's bikes
    prisma.bike.create({
      data: {
        brand: 'Suzuki',
        model: 'GSX-R750',
        year: 2021,
        customerId: customers[9].customerId,
      },
    }),
    prisma.bike.create({
      data: {
        brand: 'Ducati',
        model: 'Panigale V4',
        year: 2023,
        customerId: customers[9].customerId,
      },
    }),
  ]);

  console.log('🏍️ Created 15 bikes');

  // Current date: May 7, 2025
  const currentDate = new Date('2025-05-07');

  // Create 20 Service Records with various statuses and dates

  await Promise.all([
    // Recent service records (pending and in-progress)
    prisma.serviceRecord.create({
      data: {
        bikeId: bikes[0].bikeId,
        serviceDate: new Date(currentDate),
        description: 'Oil change and general checkup',
        status: Status.PENDING,
      },
    }),
    prisma.serviceRecord.create({
      data: {
        bikeId: bikes[1].bikeId,
        serviceDate: new Date(currentDate.getTime() - 3 * 24 * 60 * 60 * 1000), // 3 days ago (May 4, 2025)
        description: 'Engine tuning and brake adjustment',
        status: Status.IN_PROGRESS,
      },
    }),
    prisma.serviceRecord.create({
      data: {
        bikeId: bikes[2].bikeId,
        serviceDate: new Date(currentDate.getTime() - 2 * 24 * 60 * 60 * 1000), // 2 days ago (May 5, 2025)
        description: 'Chain replacement',
        status: Status.PENDING,
      },
    }),

    // 7-10 days old service records (requested specifically)
    prisma.serviceRecord.create({
      data: {
        bikeId: bikes[3].bikeId,
        serviceDate: new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000), // 7 days ago (April 30, 2025)
        description: 'Tire replacement and chain lubrication',
        status: Status.PENDING, // Still pending after 7 days (overdue)
      },
    }),
    prisma.serviceRecord.create({
      data: {
        bikeId: bikes[4].bikeId,
        serviceDate: new Date(currentDate.getTime() - 8 * 24 * 60 * 60 * 1000), // 8 days ago (April 29, 2025)
        description: 'Carburetor cleaning and tuning',
        status: Status.IN_PROGRESS, // In progress after 8 days (overdue)
      },
    }),
    prisma.serviceRecord.create({
      data: {
        bikeId: bikes[5].bikeId,
        serviceDate: new Date(currentDate.getTime() - 10 * 24 * 60 * 60 * 1000), // 10 days ago (April 27, 2025)
        description: 'Clutch adjustment and throttle calibration',
        status: Status.PENDING, // Still pending after 10 days (overdue)
      },
    }),

    // More recent records (some completed, some pending)
    prisma.serviceRecord.create({
      data: {
        bikeId: bikes[6].bikeId,
        serviceDate: new Date(currentDate.getTime() - 5 * 24 * 60 * 60 * 1000), // 5 days ago (May 2, 2025)
        description: 'Full maintenance service',
        status: Status.DONE,
        completionDate: new Date(
          currentDate.getTime() - 3 * 24 * 60 * 60 * 1000,
        ), // Completed 3 days ago
      },
    }),
    prisma.serviceRecord.create({
      data: {
        bikeId: bikes[7].bikeId,
        serviceDate: new Date(currentDate.getTime() - 4 * 24 * 60 * 60 * 1000), // 4 days ago (May 3, 2025)
        description: 'Brake pad replacement',
        status: Status.DONE,
        completionDate: new Date(
          currentDate.getTime() - 1 * 24 * 60 * 60 * 1000,
        ), // Completed 1 day ago
      },
    }),

    // Older completed service records
    prisma.serviceRecord.create({
      data: {
        bikeId: bikes[8].bikeId,
        serviceDate: new Date(currentDate.getTime() - 15 * 24 * 60 * 60 * 1000), // 15 days ago (April 22, 2025)
        description: 'Engine overhaul',
        status: Status.DONE,
        completionDate: new Date(
          currentDate.getTime() - 12 * 24 * 60 * 60 * 1000,
        ), // Completed 12 days ago
      },
    }),
    prisma.serviceRecord.create({
      data: {
        bikeId: bikes[9].bikeId,
        serviceDate: new Date(currentDate.getTime() - 20 * 24 * 60 * 60 * 1000), // 20 days ago (April 17, 2025)
        description: 'Suspension tuning',
        status: Status.DONE,
        completionDate: new Date(
          currentDate.getTime() - 18 * 24 * 60 * 60 * 1000,
        ), // Completed 18 days ago
      },
    }),

    // More overdue services
    prisma.serviceRecord.create({
      data: {
        bikeId: bikes[10].bikeId,
        serviceDate: new Date(currentDate.getTime() - 12 * 24 * 60 * 60 * 1000), // 12 days ago (April 25, 2025)
        description: 'Exhaust system repair',
        status: Status.IN_PROGRESS, // Still in progress after 12 days (overdue)
      },
    }),

    // Additional service records for other bikes
    prisma.serviceRecord.create({
      data: {
        bikeId: bikes[11].bikeId,
        serviceDate: new Date(currentDate.getTime() - 6 * 24 * 60 * 60 * 1000), // 6 days ago (May 1, 2025)
        description: 'Oil filter replacement',
        status: Status.DONE,
        completionDate: new Date(
          currentDate.getTime() - 5 * 24 * 60 * 60 * 1000,
        ), // Completed 5 days ago
      },
    }),
    prisma.serviceRecord.create({
      data: {
        bikeId: bikes[12].bikeId,
        serviceDate: new Date(currentDate.getTime() - 1 * 24 * 60 * 60 * 1000), // 1 day ago (May 6, 2025)
        description: 'Fuel injection system cleaning',
        status: Status.IN_PROGRESS,
      },
    }),
    prisma.serviceRecord.create({
      data: {
        bikeId: bikes[13].bikeId,
        serviceDate: new Date(currentDate.getTime() - 9 * 24 * 60 * 60 * 1000), // 9 days ago (April 28, 2025)
        description: 'Spark plug replacement',
        status: Status.DONE,
        completionDate: new Date(
          currentDate.getTime() - 7 * 24 * 60 * 60 * 1000,
        ), // Completed 7 days ago
      },
    }),

    // Service history for bikes with multiple records
    prisma.serviceRecord.create({
      data: {
        bikeId: bikes[0].bikeId, // Second service for bike 1
        serviceDate: new Date(currentDate.getTime() - 90 * 24 * 60 * 60 * 1000), // 90 days ago
        description: 'Annual maintenance',
        status: Status.DONE,
        completionDate: new Date(
          currentDate.getTime() - 88 * 24 * 60 * 60 * 1000,
        ), // Completed 88 days ago
      },
    }),
    prisma.serviceRecord.create({
      data: {
        bikeId: bikes[2].bikeId, // Second service for bike 3
        serviceDate: new Date(currentDate.getTime() - 60 * 24 * 60 * 60 * 1000), // 60 days ago
        description: 'Battery replacement',
        status: Status.DONE,
        completionDate: new Date(
          currentDate.getTime() - 59 * 24 * 60 * 60 * 1000,
        ), // Completed 59 days ago
      },
    }),
    prisma.serviceRecord.create({
      data: {
        bikeId: bikes[5].bikeId, // Second service for bike 6
        serviceDate: new Date(
          currentDate.getTime() - 120 * 24 * 60 * 60 * 1000,
        ), // 120 days ago
        description: 'Headlight adjustment',
        status: Status.DONE,
        completionDate: new Date(
          currentDate.getTime() - 119 * 24 * 60 * 60 * 1000,
        ), // Completed 119 days ago
      },
    }),
    prisma.serviceRecord.create({
      data: {
        bikeId: bikes[8].bikeId, // Second service for bike 9
        serviceDate: new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
        description: 'Electrical system diagnosis',
        status: Status.DONE,
        completionDate: new Date(
          currentDate.getTime() - 29 * 24 * 60 * 60 * 1000,
        ), // Completed 29 days ago
      },
    }),
    prisma.serviceRecord.create({
      data: {
        bikeId: bikes[14].bikeId, // Service for bike 15
        serviceDate: new Date(currentDate.getTime() - 45 * 24 * 60 * 60 * 1000), // 45 days ago
        description: 'Coolant flush and replacement',
        status: Status.DONE,
        completionDate: new Date(
          currentDate.getTime() - 44 * 24 * 60 * 60 * 1000,
        ), // Completed 44 days ago
      },
    }),
  ]);

  console.log('🔧 Created 20 service records');
  console.log('✅ Seeding completed successfully!');
};

main()
  .catch(error => {
    console.error('❌ Error during seeding:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
