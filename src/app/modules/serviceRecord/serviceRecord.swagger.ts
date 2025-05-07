/**
 * @swagger
 * components:
 *   schemas:
 *     ServiceRecord:
 *       type: object
 *       required:
 *         - bikeId
 *         - serviceDate
 *         - serviceType
 *       properties:
 *         serviceId:
 *           type: string
 *           description: Auto-generated UUID for the service record
 *         bikeId:
 *           type: string
 *           description: ID of the bike being serviced
 *         serviceDate:
 *           type: string
 *           format: date
 *           description: Date when the service was performed
 *         serviceType:
 *           type: string
 *           description: Type of service performed
 *         description:
 *           type: string
 *           description: Detailed description of the service performed
 *         cost:
 *           type: number
 *           format: float
 *           description: Cost of the service
 *         bike:
 *           $ref: '#/components/schemas/Bike'
 *       example:
 *         serviceId: "550e8400-e29b-41d4-a716-446655440002"
 *         bikeId: "550e8400-e29b-41d4-a716-446655440001"
 *         serviceDate: "2025-05-01"
 *         serviceType: "Full Tune-Up"
 *         description: "Complete bike overhaul including drivetrain cleaning, brake adjustment, and wheel truing"
 *         cost: 150.00
 *
 * @swagger
 * tags:
 *   name: Services
 *   description: Bike service records management APIs
 */

/**
 * @swagger
 * /services:
 *   post:
 *     summary: Create a new service record
 *     tags: [Services]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - bikeId
 *               - serviceDate
 *               - serviceType
 *             properties:
 *               bikeId:
 *                 type: string
 *               serviceDate:
 *                 type: string
 *                 format: date
 *               serviceType:
 *                 type: string
 *               description:
 *                 type: string
 *               cost:
 *                 type: number
 *     responses:
 *       201:
 *         description: Service record created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 status:
 *                   type: number
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/ServiceRecord'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *
 *   get:
 *     summary: Get all service records
 *     tags: [Services]
 *     parameters:
 *       - in: query
 *         name: bikeId
 *         schema:
 *           type: string
 *         description: Filter service records by bike ID
 *       - in: query
 *         name: customerId
 *         schema:
 *           type: string
 *         description: Filter service records by customer ID
 *     responses:
 *       200:
 *         description: List of all service records
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 status:
 *                   type: number
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ServiceRecord'
 */

/**
 * @swagger
 * /services/status:
 *   get:
 *     summary: Get pending or overdue services
 *     description: Returns all services that have status "pending" or "in-progress" and serviceDate older than 7 days
 *     tags: [Services]
 *     responses:
 *       200:
 *         description: List of pending or overdue services
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 status:
 *                   type: number
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ServiceRecord'
 */

/**
 * @swagger
 * /services/{serviceId}:
 *   get:
 *     summary: Get service record by ID
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: serviceId
 *         required: true
 *         schema:
 *           type: string
 *         description: Service Record ID
 *     responses:
 *       200:
 *         description: Service record details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 status:
 *                   type: number
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/ServiceRecord'
 *       404:
 *         description: Service record not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *
 *   put:
 *     summary: Update service record information
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: serviceId
 *         required: true
 *         schema:
 *           type: string
 *         description: Service Record ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               serviceDate:
 *                 type: string
 *                 format: date
 *               serviceType:
 *                 type: string
 *               description:
 *                 type: string
 *               cost:
 *                 type: number
 *     responses:
 *       200:
 *         description: Service record updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 status:
 *                   type: number
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/ServiceRecord'
 *       404:
 *         description: Service record not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *
 *   delete:
 *     summary: Delete a service record
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: serviceId
 *         required: true
 *         schema:
 *           type: string
 *         description: Service Record ID
 *     responses:
 *       200:
 *         description: Service record deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 status:
 *                   type: number
 *                 message:
 *                   type: string
 *       404:
 *         description: Service record not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
