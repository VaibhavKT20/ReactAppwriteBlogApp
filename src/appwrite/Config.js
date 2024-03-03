import { Client, Databases, ID, Storage, Query } from "appwrite";
import conf from "../Config/conf";

export class Service {
  client = new Client();
  database;
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);
    this.database = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, userId, status }) {
    try {
      return await this.database.createDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      throw "createPost  " + error.message;
      return false;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status, userId }) {
    try {
      const updatedPost = await this.database.updateDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
      return updatedPost;
    } catch (error) {
      throw "UpdatePost: " + error.message;
      return false;
    }
  }

  async deletePost(slug) {
    try {
      await this.database.deleteDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      throw "DeletePost" + error.message;
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.database.getDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug
      );
    } catch (error) {
      throw "getPost" + error.message;
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.database.listDocuments(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        queries
      );
    } catch (error) {
      throw "getPosts" + error.message;
      return false;
    }
  }

  /** file upload service */

  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        conf.appWriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      throw "uploadFile " + error.message;
      return false;
    }
  }

  async deleteFile(userId) {
    try {
      await this.storage.deleteFile(conf.appWriteBucketId, userId);
      return true;
    } catch (error) {
      throw "delete File" + error.message;
      return false;
    }
  }

  getFilePreview(userId) {
    return this.storage.getFilePreview(conf.appWriteBucketId, userId);
  }
}

const appwriteService = new Service();

export default appwriteService;
