import * as tf from '@tensorflow/tfjs';

export type WarmupSizes = [number, number][];
export interface IUpscalerOptions {
  model?: string;
  scale?: number;
  warmupSizes?: WarmupSizes;
}

export type Progress = (amount: number) => void;

export interface IUpscaleOptions {
  output?: 'src' | 'tensor';
  patchSize?: number;
  padding?: number;
  progress?: Progress;
}

export interface IModelDefinition {
  url: string;
  scale: number;
  configURL?: string;
  description?: string;
  deprecated?: boolean;
  preprocess?: (t: tf.Tensor4D) => tf.Tensor4D;
  postprocess?: (t: tf.Tensor3D) => tf.Tensor3D;
  // TODO: Work out correct typing for this
  // customLayers?: Array<tf.layers.Layer>;
  customLayers?: Array<any>;
}

export type IIntermediaryModelDefinition = Omit<
  IModelDefinition,
  'configURL' | 'url'
> & {
  urlPath: string;
};

export type Layer = tf.layers.Layer;
