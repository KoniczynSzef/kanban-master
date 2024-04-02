// Generated by Xata Codegen 0.29.3. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
    BaseClientOptions,
    SchemaInference,
    XataRecord,
} from "@xata.io/client";

const tables = [
    {
        name: "Project",
        columns: [
            {
                name: "id",
                type: "int",
                notNull: true,
                unique: true,
                defaultValue:
                    "nextval('bb_sltnmfhjf96et9tlk60f1k3ab0_1lvfh1.\"Project_id_seq\"'::regclass)",
            },
            {
                name: "name",
                type: "text",
                notNull: true,
                unique: false,
                defaultValue: null,
            },
        ],
    },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Project = InferredTypes["Project"];
export type ProjectRecord = Project & XataRecord;

export type DatabaseSchema = {
    Project: ProjectRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
    databaseURL: process.env.XATA_DATABASE_URL as string,
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
    constructor(options?: BaseClientOptions) {
        super({ ...defaultOptions, ...options }, tables);
    }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
    if (instance) return instance;

    instance = new XataClient();
    return instance;
};
