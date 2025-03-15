import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const appointments = pgTable("appointments", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  details: text("details"),
  createdAt: timestamp("created_at").defaultNow()
});

export const insertAppointmentSchema = createInsertSchema(appointments).pick({
  fullName: true,
  phone: true,
  email: true,
  details: true
}).extend({
  phone: z.string().min(9).max(10),
  email: z.string().email(),
  fullName: z.string().min(2)
});

export type InsertAppointment = z.infer<typeof insertAppointmentSchema>;
export type Appointment = typeof appointments.$inferSelect;
