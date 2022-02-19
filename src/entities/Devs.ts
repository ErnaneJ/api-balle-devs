import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, OneToMany } from 'typeorm';
import { v4 as uuid } from "uuid";

@Entity('devs')
export class Dev {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  avatar: string;

  @Column()
  office: string;

  @Column()
  nick_github: string;

  @Column()
  secret_key: string;

  @Column()
  linkedin: string;

  @Column()
  website: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if(!this.id) this.id = uuid(); 
    if(!this.avatar) this.avatar = "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg"; 
  }
}