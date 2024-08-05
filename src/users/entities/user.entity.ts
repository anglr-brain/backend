import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public email: string;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column()
  public username: string;

  @Column()
  public password: string;

  @Column()
  public role: string;

  @Column()
  public tier: string;

  @Column()
  public verified: boolean;
}
