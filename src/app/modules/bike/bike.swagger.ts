/**
 * @swagger
 * components:
 *   schemas:
 *     Bike:
 *       type: object
 *       required:
 *         - model
 *         - type
 *         - frameSize
 *         - customerId
 *       properties:
 *         bikeId:
 *           type: string
 *           description: Auto-generated UUID for the bike
 *         model:
 *           type: string
 *           description: Bike model name
 *         type:
 *           type: string
 *           description: Type of bike (road, mountain, hybrid, etc.)
 *         frameSize:
 *           type: string
 *           description: Size of the bike frame
 *         purchaseDate:
 *           type: string
 *           format: date
 *           description: Date when the bike was purchased
 *         customerId:
 *           type: string
 *           description: ID of the customer who owns the bike
 *         customer:
 *           $ref: '#/components/schemas/Customer'
 *       example:
 *         bikeId: "550e8400-e29b-41d4-a716-446655440001"
 *         model: "Trek Domane SL 5"
 *         type: "Road Bike"
 *         frameSize: "56cm"
 *         purchaseDate: "2025-01-15"
 *         customerId: "550e8400-e29b-41d4-a716-446655440000"
 *
 *     Error:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: false
 *         status:
 *           type: number
 *           example: 404
 *         message:
 *           type: string
 *           example: "Resource not found"
 *         stack:
 *           type: string
 *           description: Stack trace (only shown in development)
 *           example: "Error: Resource not found\n    at ..."
 *
 * @swagger
 * tags:
 *   name: Bikes
 *   description: Bike management APIs
 */

/**
 * @swagger
 * /bikes:
 *   post:
 *     summary: Register a new bike
 *     tags: [Bikes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - model
 *               - type
 *               - frameSize
 *               - customerId
 *             properties:
 *               model:
 *                 type: string
 *               type:
 *                 type: string
 *               frameSize:
 *                 type: string
 *               purchaseDate:
 *                 type: string
 *                 format: date
 *               customerId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Bike registered successfully
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
 *                   $ref: '#/components/schemas/Bike'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *
 *   get:
 *     summary: Get all bikes
 *     tags: [Bikes]
 *     parameters:
 *       - in: query
 *         name: customerId
 *         schema:
 *           type: string
 *         description: Filter bikes by customer ID
 *     responses:
 *       200:
 *         description: List of all bikes
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
 *                     $ref: '#/components/schemas/Bike'
 */

/**
 * @swagger
 * /bikes/{bikeId}:
 *   get:
 *     summary: Get bike by ID
 *     tags: [Bikes]
 *     parameters:
 *       - in: path
 *         name: bikeId
 *         required: true
 *         schema:
 *           type: string
 *         description: Bike ID
 *     responses:
 *       200:
 *         description: Bike details retrieved successfully
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
 *                   $ref: '#/components/schemas/Bike'
 *       404:
 *         description: Bike not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *
 *   put:
 *     summary: Update bike information
 *     tags: [Bikes]
 *     parameters:
 *       - in: path
 *         name: bikeId
 *         required: true
 *         schema:
 *           type: string
 *         description: Bike ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               model:
 *                 type: string
 *               type:
 *                 type: string
 *               frameSize:
 *                 type: string
 *               purchaseDate:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Bike updated successfully
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
 *                   $ref: '#/components/schemas/Bike'
 *       404:
 *         description: Bike not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *
 *   delete:
 *     summary: Delete a bike
 *     tags: [Bikes]
 *     parameters:
 *       - in: path
 *         name: bikeId
 *         required: true
 *         schema:
 *           type: string
 *         description: Bike ID
 *     responses:
 *       200:
 *         description: Bike deleted successfully
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
 *                   type: object
 *       404:
 *         description: Bike not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
