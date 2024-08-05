import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserRole, UserTier } from "src/users/enums/index";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({ unique: true })
  public email: string;

  @Column()
  public firstname: string;

  @Column()
  public lastname: string;

  @Column()
  public country: string;

  @Column({ unique: true })
  public username: string;

  @Column()
  public password: string;

  @Column({ type: "enum", enum: UserRole })
  public role: UserRole;

  @Column({ type: "enum", enum: UserTier })
  public tier: UserTier;

  @Column()
  public verified: boolean;
}
