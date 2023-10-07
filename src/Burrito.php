<?php

namespace src;

final class Burrito
{
	public function __construct(
		private readonly Ingredients $ingredients)
	{
	}
}