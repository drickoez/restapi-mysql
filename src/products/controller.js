const Product = require("../products/model");

exports.create = async (req, res) => {
  try {
    const { users_id, name, price, stocks, status } = req.body;

    const product = await Product.create({
      users_id,
      name,
      price,
      stocks,
      status,
    });

    return res.status(201).json({
      status: 201,
      success: true,
      message: "new product created",
      data: {
        product: product,
      },
      error: null,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      success: false,
      message: "internal server error",
      data: null,
      error: "Internal Server Error",
    });
  }
};

exports.all = async (req, res) => {
  try {
    const products = await Product.findAll();
    return res.status(200).json({
      status: 200,
      success: true,
      message: "ok",
      data: {
        products,
      },
      error: null,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      success: false,
      message: "internal server error",
      data: null,
      error: "Internal Server Error",
    });
  }
};

exports.find = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({
      where: {
        id: id,
      },
    });

    if (!product) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "product not found",
        data: null,
        error: "Product Not Found",
      });
    }

    return res.status(200).json({
      status: 200,
      success: true,
      message: "ok",
      data: {
        product: product,
      },
      error: null,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      success: false,
      message: "internal server error",
      data: null,
      error: "Internal Server Error",
    });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await Product.update(req.body, {
      where: {
        id: id,
      },
    });

    if (!updated[0]) {
      return res.status(200).json({
        status: 200,
        success: false,
        message: "failed to update product",
        data: null,
        error: "Failed To Update Product",
      });
    }

    return res.status(200).json({
      status: 200,
      success: true,
      message: "product updated",
      data: null,
      error: null,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      success: false,
      message: "internal server error",
      data: null,
      error: "Internal Server Error",
    });
  }
};

exports.destroy = async (req, res) => {
  try {
    const { id } = req.params;

    const destroyed = await Product.destroy({
      where: {
        id: id,
      },
    });

    if (!destroyed) {
      return res.status(200).json({
        status: 200,
        success: false,
        message: "failed to delete product",
        data: null,
        error: "Failed To Delete Product",
      });
    }

    return res.status(200).json({
      status: 200,
      success: true,
      message: "product deleted",
      data: null,
      error: null,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      success: false,
      message: "internal server error",
      data: null,
      error: "Internal Server Error",
    });
  }
};
