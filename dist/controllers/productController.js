"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getProducts = void 0;
const productModel_1 = __importDefault(require("../models/productModel"));
let data = [...productModel_1.default];
const getProducts = (_, res) => {
    res.json({
        data,
        message: "Customer data retrieved successfully",
        status: 200,
        meta: {
            total: data.length,
            totalPage: 3,
            page: 1,
            limit: 10,
        }
    });
};
exports.getProducts = getProducts;
const getProductById = (req, res) => {
    const product = data.find((p) => p.id === +req.params.id);
    product ? res.json(product) : res.status(404).json({ message: "Not found" });
};
exports.getProductById = getProductById;
const createProduct = (req, res) => {
    const newProduct = {
        id: Date.now(),
        ...req.body
    };
    data.push(newProduct);
    res.status(201).json(newProduct);
};
exports.createProduct = createProduct;
const updateProduct = (req, res) => {
    const index = data.findIndex((p) => p.id === +req.params.id);
    if (index === -1)
        return res.status(404).json({ message: "Not found" });
    data[index] = { ...data[index], ...req.body };
    res.json(data[index]);
};
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => {
    data = data.filter((p) => p.id !== +req.params.id);
    res.status(204).end();
};
exports.deleteProduct = deleteProduct;
