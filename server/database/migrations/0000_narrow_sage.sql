CREATE TABLE `employee` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`first_name` text NOT NULL,
	`aadhar_card_number` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `employee_aadhar_card_number_unique` ON `employee` (`aadhar_card_number`);