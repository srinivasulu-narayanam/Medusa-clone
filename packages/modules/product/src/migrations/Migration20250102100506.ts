import { Migration } from "@mikro-orm/migrations"

export class Migration202408271511 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'alter table if exists "product" add column if not exists "test_field" text;'
    )
  }

  async down(): Promise<void> {
    this.addSql(
      'alter table if exists "product" drop column if exists "test_field";'
    )
  }
}
